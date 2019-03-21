import Router from "next/router";
import axios from "axios";
import { AUTHENTICATE, DEAUTHENTICATE, SET_USER } from "../types";
import { API } from "../../config";
import { setCookie, removeCookie } from "../../utils/cookie";
import {devLogger} from 'dev-logger-simple'

// gets token from the api and stores it in the redux store and in cookie
const login = ({ email, password }, type) => {
  if (type !== "signin" && type !== "signup") {
    throw new Error("Wrong API call!");
  }
  return dispatch => {
    axios
      .post(`${API}/auth/login`, { email, password })
      .then(response => {
        setCookie("token", response.data.token);
        setCookie("user", JSON.stringify(response.data.data));
        Router.push("/");
        dispatch({ type: AUTHENTICATE, payload: response.data.token });
        dispatch({ type: SET_USER, payload: response.data.data });
      })
      .catch(err => {
        // throw new Error(err);
        devLogger(err);
      });
  };
};
const register = ({ email, password }, type) => {
  if (type !== "signin" && type !== "signup") {
    throw new Error("Wrong API call!");
  }
  return dispatch => {
    axios
      .post(`${API}/auth/login`, { email, password })
      .then(response => {
        setCookie("token", response.data.token);
        Router.push("/");
        dispatch({ type: AUTHENTICATE, payload: response.data.token });
      })
      .catch(err => {
        // throw new Error(err);
        devLogger(err);
      });
  };
};

// gets the token from the cookie and saves it in the store
const reauthenticate = token => {
  return dispatch => {
    dispatch({ type: AUTHENTICATE, payload: token });
  };
};

// removing the token
const deauthenticate = () => {
  return dispatch => {
    removeCookie("token");
    removeCookie("user");
    Router.push("/");
    dispatch({ type: DEAUTHENTICATE });
  };
};

export default {
  login,
  register,
  reauthenticate,
  deauthenticate
};
