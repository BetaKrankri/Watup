import { createSlice } from "@reduxjs/toolkit";
import initialConversations from "../data/conversations";

const conversationsSlice = createSlice({
  name: "conversation",
  initialState: initialConversations,
  reducers: {
    createConversation: (state, { payload }) => {
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
    deleteConversation: (state, { payload }) => {
      return state.filter(
        (conversation) => conversation.id !== payload.conversationId
      );
    },
  },
});

export default conversationsSlice.reducer;

export const { createConversation, deleteConversation } =
  conversationsSlice.actions;
