import * as Sentry from "@sentry/react";

export const initSentry = () => {
  const dsn = "YOUR_SENTRY_DSN_HERE";

  if (dsn === "YOUR_SENTRY_DSN_HERE" || !dsn) {
    console.warn("Sentry DSN is not configured. Sentry will not be initialized.");
    return;
  }

  Sentry.init({
    dsn: dsn,

    integrations: [
      Sentry.browserTracingIntegration(),
      Sentry.replayIntegration(),
    ],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,

    // Set `tracePropagationTargets` to control for which URLs distributed tracing should be enabled
    tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],

    // Capture Replay for 10% of all sessions,
    // plus for 100% of sessions with an error
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
  });
};
