import * as Sentry from "@sentry/browser";

export const apiCatch = (error, getState) => {
  const store = getState();
  const storeStringify = JSON.stringify(store);
  const { root: { user: { email } } } = store;

  Sentry.configureScope(
    scope => scope
      .setLevel("Error")
      .setUser({ email })
      .setExtra("store", storeStringify)
  );
  Sentry.captureException(error);
  return Sentry.showReportDialog();
};
