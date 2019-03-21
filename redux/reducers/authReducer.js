import { AUTHENTICATE, DEAUTHENTICATE, SET_USER } from "../types";

const initialState = {
  token: null,
  user: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return { token: action.payload };
    case DEAUTHENTICATE:
      return { token: null, user: null };
    case SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
