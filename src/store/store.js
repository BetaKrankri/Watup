import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import conversationReducer from "./slices/conversationsSlice.js";
import contactsReducer from "./slices/contactsSlice.js";

const store = configureStore({
  reducer: {
    user: userReducer,
    conversations: conversationReducer,
    contacts: contactsReducer,
  },
});

export default store;
