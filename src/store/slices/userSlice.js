import { createSlice } from "@reduxjs/toolkit";
import initialUser from "../data/user";

const userSlice = createSlice({
  name: "user",
  initialState: initialUser,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
    toggleOnline: (state) => {
      state.online = !state.online;
    },
    setOnlineStatus: (state, action) => {
      state.online = action.payload;
    },
    setAvatar: (state, { payload }) => {
      state.avatarSrc = payload;
    },
  },
});

export default userSlice.reducer;

export const {
  toggleOnline,
  setOnlineStatus,
  setName,
  setPhoneNumber: setNumber,
} = userSlice.actions;
