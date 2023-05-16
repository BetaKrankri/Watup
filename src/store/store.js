import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import conversationReducer from "./slices/conversationsSlice.js";

const store = configureStore({
  reducer: {
    user: userReducer,
    conversations: conversationReducer,
  },
});

export default store;
