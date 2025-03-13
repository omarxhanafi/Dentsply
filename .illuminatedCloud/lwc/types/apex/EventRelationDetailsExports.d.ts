// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare module "@salesforce/apex/EventRelationDetails.getAttendeesList" {
    export default function getAttendeesList(params: {eventid: string}): Promise<AttendeesWrapperClass.DisplayAttendeesRecords[]>;
}

declare module "@salesforce/apex/EventRelationDetails.getEventRelationDetails" {
    export default function getEventRelationDetails(params: {eventid: string}): Promise<any[]>;
}