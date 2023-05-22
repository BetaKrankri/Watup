import { createSlice } from "@reduxjs/toolkit";
import initialConversations from "../data/conversations";

const conversationsSlice = createSlice({
  name: "conversations",
  initialState: initialConversations,
  reducers: {
    createdConversation: (state, { payload }) => {
      state = [
        ...state,
        {
          id: `conv_${state.length}${Math.floor(Math.random() * 99999)}`,
          participants: [...payload.participants],
          chatTitle: payload.title,
          messages: [],
        },
      ];
    },
    deletedConversation: (state, { payload }) => {
      return state.filter(
        (conversation) => conversation.id !== payload.conversationId
      );
    },
    sendedMessage: (state, { payload }) =>
      state.map((conversation) =>
        conversation.id === payload.converId
          ? {
              ...conversation,
              messages: [
                {
                  timeStamp: new Date().toJSON(),
                  senderPhone: payload.senderPhone,
                  text: payload.text,
                },
                ...conversation.messages,
              ],
            }
          : conversation
      ),
  },
});

export function selectChatsPreviewList({ conversations }) {
  return conversations.map((conver) => ({
    id: conver.id,
    chatTitle: conver.chatTitle,
    lastMessage: conver.messages[0],
    chatAvatar: conver.chatAvatar,
  }));
}

export default conversationsSlice.reducer;

export const { createdConversation, deletedConversation, sendedMessage } =
  conversationsSlice.actions;
