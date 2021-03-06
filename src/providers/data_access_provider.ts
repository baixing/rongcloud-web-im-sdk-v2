module RongIMLib {
    export interface DataAccessProvider {
        addConversation(conversation: Conversation, callback: ResultCallback<boolean>): void;

        removeConversation(conversationType: ConversationType, targetId: string, callback: ResultCallback<boolean>): void;

        addMessage(conversationType: ConversationType, targetId: string, message: MessageContent, callback?: ResultCallback<Message>): void;

        removeMessage(conversationType: ConversationType, targetId: string, messageId: number[], callback: ResultCallback<boolean>): void;

        updateMessage(message: Message, callback?: ResultCallback<Message>): void;

        clearMessages(conversationType: ConversationType, targetId: string, callback: ResultCallback<boolean>): void;

        updateMessages(conversationType: ConversationType, targetId: string, key: string, value: any, callback: ResultCallback<boolean>): void;

        getConversation(conversationType: ConversationType, targetId: string): Conversation;

        getConversationList(callback: ResultCallback<Conversation[]>, conversationTypes?: ConversationType[]): void;

        clearConversations(conversationTypes: ConversationType[], callback: ResultCallback<boolean>): void;

        getHistoryMessages(conversationType: ConversationType, targetId: string, timestamp: number, count: number, callback: GetHistoryMessagesCallback): void;

        getTotalUnreadCount(callback: ResultCallback<number>): void;

        getConversationUnreadCount(conversationTypes: ConversationType[], callback: ResultCallback<number>): void;

        getUnreadCount(conversationType: ConversationType, targetId: string, callback: ResultCallback<number>): void;

        clearUnreadCount(conversationType: ConversationType, targetId: string, callback: ResultCallback<boolean>):void;

        setConversationToTop(conversationType: ConversationType, targetId: string, callback: ResultCallback<boolean>): void;

        setMessageExtra(messageId: string, value: string, callback: ResultCallback<boolean>): void;

        setMessageReceivedStatus(messageId: string, receivedStatus: ReceivedStatus, callback: ResultCallback<boolean>): void;

        setMessageSentStatus(messageId: string, sentStatus: SentStatus, callback: ResultCallback<boolean>): void;
    }
}
