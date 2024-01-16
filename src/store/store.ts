import { configureStore } from "@reduxjs/toolkit";
//import notificationsReducer from "./notifications/notifications.slice";
import userReducer from "./user/user.slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// reducers are configured with inital state
// actions are created
// components dispatch actions
// actions are caught by reducer functions
// reducers change the state
// components get updated state using selectors
