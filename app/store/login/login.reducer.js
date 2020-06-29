import {LOGIN_REQUESTED, LOGIN_SUCCESS, LOGIN_FAILED} from './login.types';

const initialState = {};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUESTED:
      return {...state, data: action.payload};
    case LOGIN_SUCCESS:
      return {...state, data: action.payload};
    case LOGIN_FAILED:
      return {...state, data: action.payload};
    default:
      return state;
  }
}
