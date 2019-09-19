import {LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE} from './actionType';

export function login(credential) {
  return ({
    type: LOGIN,
    credential
  })
}
export function loginSuccess(data) {
  return ({
    type: LOGIN_SUCCESS,
    data
  })
}
export function loginError(error) {
  return ({
    type: LOGIN_FAILURE,
    error
  })
}