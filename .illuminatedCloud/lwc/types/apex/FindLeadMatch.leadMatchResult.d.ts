// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare namespace FindLeadMatch {
    declare interface leadMatchResult {
        matchRecord?: SObject;
        fieldDiffs?: string[];
        matchConfidence?: number;
        matchScore?: string;
        matchReasons?: string[];
    }
}