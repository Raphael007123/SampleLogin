import {LOGIN_REQUESTED, LOGIN_FAILED, LOGIN_SUCCESS} from './login.types';

export function loginRequested() {
  return {type: LOGIN_REQUESTED};
}

export function loginSuccess(data) {
  return {type: LOGIN_SUCCESS};
}

export function loginFailed(data) {
  return {type: LOGIN_FAILED};
}
