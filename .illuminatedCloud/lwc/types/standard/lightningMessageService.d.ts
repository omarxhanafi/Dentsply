// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

/**
 * Copyright (c) 2015-present, Rose Silver Software LLC, All rights reserved.
 * Note this may be a full or partial derivative of works by:
 * Copyright (c) 2024, Salesforce, Inc. All rights reserved.
 * See SALESFORCE_LICENSE.txt for details.
 */

declare module 'lightning/messageService' {
// IC2 BEGIN
    /** Marker interface for an imported message channel for strongly-typed development. */
    export interface MessageChannelType {
    }

    /** Marker interface for an imported message context for strongly-typed development. */
    export interface MessageContextType {
    }

    /** Marker interface for an imported message channel subscription for strongly-typed development. */
    export interface MessageChannelSubscription {
    }

    /** Simple enum for allowed subscription scopes for strongly-typed development. */
    export enum SubscriptionScope {
        ApplicationScope
    }

    /** Simple interface for subscriber options passed to subscribe() for strongly-typed development. */
    export interface SubscriberOptions {
        /** The scope that a component is subscribed to. */
        scope?: SubscriptionScope;
    }

// IC2 END

    /**
     * Send a message to listeners subscribed to the channel.
     *
     * @param {MessageContextType} messageContext - The MessageContext object.
     * @param {MessageChannelType} messageChannel - MessageChannel object.
     * @param {Object} message - Optional, serializable object to be sent to subscribers.
     * @param {Object} publisherOptions - Optional, options to influence message delivery.
     */
    export function publish(
        messageContext: MessageContextType,
        messageChannel: MessageChannelType,
        message?: Object,
        publisherOptions?: Object
    ): void;

    /**
     * Subscribes a listener function to be invoked when a message is published on the provided channel.
     *
     * @param {MessageContextType} messageContext - The MessageContext object.
     * @param {MessageChannelType} messageChannel - MessageChannel object.
     * @param {Function} listener - Function to be invoked when messages are published on the channel.
     * @param {SubscriberOptions | Object} subscriberOptions - Optional, options to influence message channel subscription.
     *                                     Current subscriber options:
     *                                       1. 'scope' - the scope that a component is subscribed to.
     *                                          Setting this to 'APPLICATION_SCOPE' subscribes in the application
     *                                          scope. See the 'APPLICATION_SCOPE' export for full documentation.
     * @return {MessageChannelSubscription} - Subscription object used to unsubscribe the listener, if no longer interested.
     */
    export function subscribe(
        messageContext: MessageContextType,
        messageChannel: MessageChannelType,
        listener: Function,
        subscriberOptions?: SubscriberOptions | Object
    ): MessageChannelSubscription;

    /**
     * Unregisters the listener associated with the subscription.
     *
     * @param {MessageChannelSubscription} subscription - Subscription object returned when subscribing.
     */
    export function unsubscribe(subscription: MessageChannelSubscription): void;

    /**
     * Creates a message context for an LWC library.
     *
     * @return {MessageContextType} - MessageContext for use by LWC Library.
     */
    export function createMessageContext(): MessageContextType;

    /**
     * Releases a message context associated with LWC library and
     * unsubscribes all associated subscriptions.
     *
     * @param {MessageContextType} messageContext - MessageContext for use by LWC Library.
     */
    export function releaseMessageContext(messageContext: MessageContextType): void;

    /**
     * A '@wire' adaptor that provides component context for a 'LightningElement'.
     * Annotate a component's property with '@wire(MessageContext)' and pass that
     * context value to the first parameter of the 'subscribe' and 'publish' functions.
     * When subscribing with a '@wire(MessageContext)' context value, all listeners
     * associated with that component get automatically cleaned up on 'disconnectedCallback'.
     */
    import {WireAdapterConstructor} from "lwc";
    export const MessageContext: MessageContextType & WireAdapterConstructor;
    /**
     * When using 'subscribe', 'APPLICATION_SCOPE' is passed in as a value to the 'scope' property of
     * the 'subscriberOptions'. This specifies that the subscriber wants to subscribe to messages on
     * a message channel no matter where the subscriber is in the entire application.
     */
    export const APPLICATION_SCOPE: SubscriptionScope = SubscriptionScope.ApplicationScope;
}