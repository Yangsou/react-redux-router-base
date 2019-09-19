import * as actions from './action';

export function login(value) {
  return (dispatch) => {
    try {
      dispatch(actions.login());
      setTimeout(() => {
        dispatch(actions.loginSuccess({name: value}));
      }, 5000);
    } catch (error) {
      actions.loginError(error);
    }
  }
}