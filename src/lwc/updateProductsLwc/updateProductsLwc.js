import { LightningElement, track } from 'lwc';
import runBatch from '@salesforce/apex/BatchUpdateProductsController.runBatch';
import getJobStatus from '@salesforce/apex/BatchUpdateProductsController.getJobStatus';
import getHistoricalJobs from '@salesforce/apex/BatchUpdateProductsController.getHistoricalJobs';
import getRunningJob from '@salesforce/apex/BatchUpdateProductsController.getRunningJob';
import UPDATE_PRODUCTS_BATCH_UPDATE_PRODUCTS from '@salesforce/label/c.UpdateProducts_BatchUpdateProducts';
import UPDATE_PRODUCTS_EXECUTE_BATCH from '@salesforce/label/c.UpdateProducts_ExecuteBatch';
import UPDATE_PRODUCTS_PREVIOUS_JOBS from '@salesforce/label/c.UpdateProducts_PreviousJobs';
import UPDATE_PRODUCTS_JOB_ID from '@salesforce/label/c.UpdateProducts_JobID';
import UPDATE_PRODUCTS_START_TIME from '@salesforce/label/c.UpdateProducts_StartTime';
import UPDATE_PRODUCTS_END_TIME from '@salesforce/label/c.UpdateProducts_EndTime';
import UPDATE_PRODUCTS_STATUS from '@salesforce/label/c.UpdateProducts_Status';
import UPDATE_PRODUCTS_DETAILS from '@salesforce/label/c.UpdateProducts_Details';
import UPDATE_PRODUCTS_DURATION from '@salesforce/label/c.UpdateProducts_Duration';
import UPDATE_PRODUCTS_PRODUCT_COUNT from '@salesforce/label/c.UpdateProducts_ProductCount';
import UPDATE_PRODUCTS_ERRORS from '@salesforce/label/c.UpdateProducts_Errors';
import UPDATE_PRODUCTS_ITEMS_PROCESSED from '@salesforce/label/c.UpdateProducts_ItemsProcessed';
import UPDATE_PRODUCTS_ERROR_MESSAGES from '@salesforce/label/c.UpdateProducts_ErrorMessages';
import UPDATE_PRODUCTS_PREVIOUS from '@salesforce/label/c.UpdateProducts_Previous';
import UPDATE_PRODUCTS_NEXT from '@salesforce/label/c.UpdateProducts_Next';
import UPDATE_PRODUCTS_PAGE_OF from '@salesforce/label/c.UpdateProducts_PageOf';

export default class UpdateProductsLwc extends LightningElement {
    @track isRunning = false;
    @track progress = 0;
    @track historicalJobs = [];
    @track expandedRowId = null;
    @track pageSize = 10;
    @track currentPage = 1;
    @track totalPages = 1;
    @track progressMessage = '';

    // Labels
    labels = {
        batchUpdateProducts: UPDATE_PRODUCTS_BATCH_UPDATE_PRODUCTS,
        executeBatch: UPDATE_PRODUCTS_EXECUTE_BATCH,
        previousJobs: UPDATE_PRODUCTS_PREVIOUS_JOBS,
        jobId: UPDATE_PRODUCTS_JOB_ID,
        startTime: UPDATE_PRODUCTS_START_TIME,
        endTime: UPDATE_PRODUCTS_END_TIME,
        status: UPDATE_PRODUCTS_STATUS,
        details: UPDATE_PRODUCTS_DETAILS,
        duration: UPDATE_PRODUCTS_DURATION,
        productCount: UPDATE_PRODUCTS_PRODUCT_COUNT,
        errors: UPDATE_PRODUCTS_ERRORS,
        itemsProcessed: UPDATE_PRODUCTS_ITEMS_PROCESSED,
        errorMessages: UPDATE_PRODUCTS_ERROR_MESSAGES,
        previous: UPDATE_PRODUCTS_PREVIOUS,
        next: UPDATE_PRODUCTS_NEXT,
        pageOf: UPDATE_PRODUCTS_PAGE_OF
    };

    // Columns for the datatable
    @track columns = [
        { label: this.labels.jobId, fieldName: 'JobId__c', type: 'text' },
        { label: this.labels.startTime, fieldName: 'StartTimeFormatted', type: 'text' },
        { label: this.labels.endTime, fieldName: 'EndTimeFormatted', type: 'text' },
        {
            label: this.labels.status,
            fieldName: 'Status__c',
            type: 'text',
            cellAttributes: { class: { fieldName: 'statusClass' } }
        },
        {
            type: 'button',
            typeAttributes: {
                label: this.labels.details,
                name: 'toggleDetails',
                variant: 'neutral'
            }
        }
    ];

    connectedCallback() {
        this.loadHistoricalJobs();
        this.checkForRunningJob();
    }

    // Handle running the batch job
    handleRunBatch() {
        this.isRunning = true;
        this.progress = 0;
        runBatch()
            .then(jobId => {
                this.trackProgress(jobId);
            })
            .catch(error => {
                console.error('Error running batch:', error);
                this.isRunning = false;
            });
    }

    // Method to check for a running job
    checkForRunningJob() {
        getRunningJob()
            .then(job => {
                if (job) {
                    this.isRunning = true;
                    this.trackProgress(job.Id);
                }
            })
            .catch(error => {
                console.error('Error checking for running job:', error);
            });
    }

    // Track the progress of the running job
    trackProgress(jobId) {
        const interval = setInterval(() => {
            getJobStatus({ jobId })
                .then(job => {
                    if (job) {
                        this.progress = (job.JobItemsProcessed / job.TotalJobItems) * 100;
                        this.progressMessage = `${job.JobItemsProcessed} / ${job.TotalJobItems} items processed`;
                        if (job.Status === 'Completed' || job.Status === 'Failed') {
                            clearInterval(interval);
                            this.isRunning = false;
                            this.loadHistoricalJobs();
                        }
                    }
                })
                .catch(error => {
                    console.error('Error tracking progress:', error);
                    clearInterval(interval);
                    this.isRunning = false;
                });
        }, 1000);
    }

    // Load historical data from BatchUpdateProductsLog__c
    loadHistoricalJobs() {
        getHistoricalJobs()
            .then(jobs => {
                this.historicalJobs = jobs.map(job => ({
                    ...job,
                    StartTimeFormatted: this.formatDateTime(job.StartTime__c),
                    EndTimeFormatted: this.formatDateTime(job.EndTime__c),
                    statusClass: this.getStatusClass(job.Status__c),
                    DurationFormatted: this.formatDuration(job.Duration__c)
                }));
                this.totalPages = Math.ceil(this.historicalJobs.length / this.pageSize);
            })
            .catch(error => {
                console.error('Error loading historical jobs:', error);
            });
    }

    // Format Duration field into h m s format
    formatDuration(seconds) {
        if (!seconds) return '0s';
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        let formattedDuration = '';
        if (hours > 0) formattedDuration += `${hours}h`;
        if (minutes > 0) formattedDuration += `${minutes}m`;
        if (secs > 0) formattedDuration += `${secs}s`;
        return formattedDuration || '0s';
    }

    // Format date and time for StartDate & EndDate
    formatDateTime(dateTimeString) {
        if (!dateTimeString) return '';
        const date = new Date(dateTimeString);
        return date.toLocaleString();
    }

    // Handle toggling row details
    toggleDetails(event) {
        const jobId = event.detail.row.JobId__c;
        this.expandedRowId = this.expandedRowId === jobId ? null : jobId;
    }

    // Getter to check if a row is expanded
    get expandedRowDetails() {
        return this.historicalJobs.find(job => job.JobId__c === this.expandedRowId);
    }

    // Getter for paginated jobs
    get paginatedJobs() {
        const start = (this.currentPage - 1) * this.pageSize;
        const end = start + this.pageSize;
        return this.historicalJobs.slice(start, end);
    }

    // Go to the next page
    nextPage() {
        if (this.currentPage < this.totalPages) {
            this.currentPage++;
        }
    }

    // Go to the previous page
    previousPage() {
        if (this.currentPage > 1) {
            this.currentPage--;
        }
    }

    // Check if the next button should be disabled
    get isNextDisabled() {
        return this.currentPage >= this.totalPages;
    }

    // Check if the previous button should be disabled
    get isPreviousDisabled() {
        return this.currentPage <= 1;
    }

    // Get status color class
    getStatusClass(status) {
        return status === 'Completed' ? 'slds-text-color_success' : 'slds-text-color_error';
    }

    // Dynamic pageOf custom label
    get pageOfLabel() {
        return this.labels.pageOf
            .replace('{0}', this.currentPage)
            .replace('{1}', this.totalPages);
    }

}
