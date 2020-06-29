import {
  REGISTER_REQUESTED,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
} from './register.types';

export function registerRequested(data) {
  return {type: REGISTER_REQUESTED};
}

export function registerSuccess(data) {
  return {type: REGISTER_SUCCESS, payload: data};
}

export function registerFailed(data) {
  return {type: REGISTER_FAILED, payload: data};
}
