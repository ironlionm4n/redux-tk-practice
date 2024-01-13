import { RootState } from "../store";

export const selectNotificationsCount = (state: RootState) =>
  state.notifications.count;

export const selectResetStatus = (state: RootState) =>
  state.notifications.resetStatus;
