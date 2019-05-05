import * as Sentry from "@sentry/browser";
import superagent from 'superagent';

export default query => (dispatch, getState) => {
  const state = JSON.stringify(getState());
  superagent
    .get(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${query}`)
    .set("X-RapidAPI-Key", "27a9ab42dbmshe61213a3b9e0010p1b74a0jsn4e642284a757" + 1)
    .end((error, response) => {
      if (error) {
        Sentry.configureScope((scope) => {
          scope
            .setUser({
              state,
              "email": "john.doe@example.com"
            })
            .setLevel("Error")
          // .setExtra("character_name", "Mighty Fighter");
        });
        Sentry.captureException(error);
        return Sentry.showReportDialog();
      }

      if (response) {
        return dispatch(setList(response.body.data));
      }
    });
};
