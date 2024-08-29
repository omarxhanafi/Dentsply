import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';

export function showToast(cmp, userTheme, title, message, variant) {
    if (userTheme.includes('Theme3')) {
        if (variant.toUpperCase() === 'ERROR' || variant.toUpperCase() === 'WARNING') {
            alert(title + ' : ' + message);
        }
    } else {
        const event = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant
        });
        cmp.dispatchEvent(event);
    }
}
export function goToRecord(userTheme, recordId, cmpClass, lightningOut = false) {
    if (userTheme.includes('Theme3') || lightningOut) {
        window.open('/' + recordId, '_self');
    } else {
        cmpClass[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: recordId,
                actionName: 'view'
            }
        });
    }
}

export function handleApexError({ error, message = 'An error occurred' }) {
    const errorDetail = error.body.message.match(/(?:[A-Z]*, )(.*?)(?=:)/);
    return {
        message: message,
        detail: errorDetail ? errorDetail[1] : error.body.message
    };
}

/**
 * Format the technical error message to a more friendly message
 * @param errorMessage The error message
 * @returns {string|string|*} User friendly message
 */
export function formatApexError(errorMessage) {
    const errorTypes = [
        'CANNOT_INSERT_UPDATE_ACTIVATE_ENTITY',
        'FIELD_CUSTOM_VALIDATION_EXCEPTION',
        'UNABLE_TO_LOCK_ROW'
    ];

    // Define the trailing phrase to be removed, if present
    const trailingPhrase = 'You can look up ExceptionCode';

    for (let i = 0; i < errorTypes.length; i++) {
        const errorType = errorTypes[i];
        if (errorMessage.includes(errorType)) {
            const parts = errorMessage.split(errorType);
            if (parts.length > 1) {
                // Remove any leading comma, colon, or space
                let extractedMessage = parts[1].replace(/^[:,\s]+/, '').trim();

                // Remove the specific trailing phrase, if present
                const trailingIndex = extractedMessage.indexOf(trailingPhrase);
                if (trailingIndex !== -1) {
                    extractedMessage = extractedMessage.substring(0, trailingIndex).trim();
                }

                return extractedMessage;
            }
        }
    }
    return 'Error occurred. Please reach out to the support team for assistance.';
}

/**
 * Reduces one or more LDS errors into a string[] of error messages.
 * @param {FetchResponse|FetchResponse[]} errors
 * @return {String[]} Error messages
 */
export function reduceErrors(errors) {
    if (!Array.isArray(errors)) {
        errors = [errors];
    }

    return (
        errors
            // Remove null/undefined items
            .filter((error) => !!error)
            // Extract an error message
            .map((error) => {
                // UI API read errors
                if (Array.isArray(error.body)) {
                    return error.body.map((e) => e.message);
                }
                // Page level errors
                else if (
                    error?.body?.pageErrors &&
                    error.body.pageErrors.length > 0
                ) {
                    return error.body.pageErrors.map((e) => e.message);
                }
                // Field level errors
                else if (
                    error?.body?.fieldErrors &&
                    Object.keys(error.body.fieldErrors).length > 0
                ) {
                    const fieldErrors = [];
                    Object.values(error.body.fieldErrors).forEach(
                        (errorArray) => {
                            fieldErrors.push(
                                ...errorArray.map((e) => e.message)
                            );
                        }
                    );
                    return fieldErrors;
                }
                // UI API DML page level errors
                else if (
                    error?.body?.output?.errors &&
                    error.body.output.errors.length > 0
                ) {
                    return error.body.output.errors.map((e) => e.message);
                }
                // UI API DML field level errors
                else if (
                    error?.body?.output?.fieldErrors &&
                    Object.keys(error.body.output.fieldErrors).length > 0
                ) {
                    const fieldErrors = [];
                    Object.values(error.body.output.fieldErrors).forEach(
                        (errorArray) => {
                            fieldErrors.push(
                                ...errorArray.map((e) => e.message)
                            );
                        }
                    );
                    return fieldErrors;
                }
                // UI API DML, Apex and network errors
                else if (error.body && typeof error.body.message === 'string') {
                    return error.body.message;
                }
                // JS errors
                else if (typeof error.message === 'string') {
                    return error.message;
                }
                // Unknown error shape so try HTTP status text
                return error.statusText;
            })
            // Flatten
            .reduce((prev, curr) => prev.concat(curr), [])
            // Remove empty strings
            .filter((message) => !!message)
    );
}

/**
 * Reduces one or more LDS errors into a formatted error message.
 * @param {FetchResponse|FetchResponse[]} errors
 * @return {String} Formatted error message
 */
export function handleApexErrors(errors) {
    // Use the reduceErrors function to get an array of error messages
    const errorMessages = reduceErrors(errors);

    // If there are multiple error messages, you can choose to handle them in a specific way
    if (errorMessages.length > 1) {
        // Handle multiple errors here, if needed
        console.error('Multiple errors occurred:', errorMessages);
        return 'Multiple errors occurred. Please contact support.';
    }

    // If there is a single error message, pass it to the formatApexError function
    if (errorMessages.length === 1) {
        const formattedError = formatApexError(errorMessages[0]);

        // Return the formatted error message to display to the user
        return formattedError;
    }

    // If no error messages are present, return a default message
    return 'An unexpected error occurred. Please contact support.';
}