import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from './actionType';

export const initialState = {
  isRequesting: false,
  isLoggedIn: false,
  data: null,
  loginError: null
}
export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isRequesting: true
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isRequesting: false,
        isLoggedIn: true,
        data: action.data
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        isRequesting: false,
        isLoggedIn: false,
        loginError: action.error
      }
    default:
      return {...state}
  }
}