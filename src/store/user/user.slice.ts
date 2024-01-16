import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserState {
  username: string;
  emailAddress: string;
}

const loggedOutUsername = "";
const loggedOutEmail = "";

const initialState: UserState = {
  username: loggedOutUsername,
  emailAddress: loggedOutEmail,
};

interface UpdateUserPayload {
  username: string;
  emailAddress: string;
}

export const userSlice = createSlice({
  name: "user",
  // createSlice will infer the state type from the initialState argument
  initialState,
  reducers: {
    updateUserName: (state, action: PayloadAction<UpdateUserPayload>) => {
      state.username = action.payload.username;
      state.emailAddress = action.payload.emailAddress;
    },
    logout: (state) => {
      state.username = loggedOutUsername;
      state.emailAddress = loggedOutEmail;
    },
  },
});

export const { updateUserName, logout } = userSlice.actions;
export default userSlice.reducer;
