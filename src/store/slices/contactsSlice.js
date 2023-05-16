import { createSlice } from "@reduxjs/toolkit";
import initialContacts from "../data/contacts";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialContacts,
  reducers: {
    addContact: (state, { payload }) => {
      state.push({
        phoneNumber: payload.phoneNumber,
        name: payload.name,
        avatar: "",
      });
    },
  },
});

export default contactsSlice.reducer;

export const { addContact } = contactsSlice.actions;
