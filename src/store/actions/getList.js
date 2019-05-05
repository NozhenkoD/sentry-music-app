import { setList } from "./root";
import { apiCatch } from "../../api/apiCatch";
import superagent from 'superagent';

export default query => (dispatch, getState) => {
  const state = JSON.stringify(getState());
  superagent
    .get(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${query}`)
    .set("X-RapidAPI-Key", "27a9ab42dbmshe61213a3b9e0010p1b74a0jsn4e642284a757" + 1)
    .end((error, response) => {
      if (error) {
        return apiCatch(error, getState)
      }

      if (response) {
        return dispatch(setList(response.body.data));
      }
    });
};
