import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { StatsigProvider } from "statsig-react";
import { initSentry } from "./services/sentry";
import { STATSIG_CLIENT_KEY } from "./services/statsig";

// Initialize Sentry
initSentry();

// Generate a random User ID for testing Statsig experiments
const randomUserID = Math.floor(Math.random() * 1000000).toString();
const user = {
  userID: randomUserID,
  email: `user-${randomUserID}@example.com`,
};

console.log("Simulating User ID:", randomUserID);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StatsigProvider
      sdkKey={STATSIG_CLIENT_KEY}
      user={user}
      waitForInitialization={true}
      options={{ environment: { tier: "development" } }}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </StatsigProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
