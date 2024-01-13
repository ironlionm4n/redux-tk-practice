import { useDispatch, useSelector } from "react-redux";
import {
  selectNotificationsCount,
  selectResetStatus,
} from "./store/notifications/notifiations.selectors";

import "./App.css";
import {
  increment,
  reset,
  resetCountViaApi,
} from "./store/notifications/notifications.slice";
import { AppDispatch } from "./store/store";

function App() {
  const count = useSelector(selectNotificationsCount);
  const dispatch = useDispatch<AppDispatch>();
  const resetStatus = useSelector(selectResetStatus);

  const resetButtonText = () => {
    switch (resetStatus) {
      case "idle":
        return "Reset";
      case "error":
        return "Error";
      case "loading":
        return "Loading...";
      default:
        break;
    }
  };

  return (
    <>
      <h1>Notifications Count = {count}</h1>
      <div className="card">
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatch(resetCountViaApi());
          }}
        >
          {resetButtonText()}
        </button>
      </div>
    </>
  );
}

export default App;
