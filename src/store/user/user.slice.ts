import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserState {
  username: string;
}

const loggedOut = "";

const initialState: UserState = {
  username: loggedOut,
};

export const userSlice = createSlice({
  name: "user",
  // createSlice will infer the state type from the initialState argument
  initialState,
  reducers: {
    updateUserName: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    logout: (state) => {
      state.username = loggedOut;
    },
  },
});

export const { updateUserName, logout } = userSlice.actions;
export default userSlice.reducer;
