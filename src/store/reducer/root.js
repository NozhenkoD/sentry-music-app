import { handleActions } from "redux-actions";

const initialState = {
  list: [],
  loading: false,
  user: {
    email: "john.doe@example.com"
  }
};

export default handleActions(
  {
    SET_LIST: (state, { payload }) => ({ ...state, list: payload }),
    SET_LOADING: (state, { payload }) => ({ ...state, loading: payload })
  },
  initialState
);
