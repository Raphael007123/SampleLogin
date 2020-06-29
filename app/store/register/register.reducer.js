import {
  REGISTER_REQUESTED,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
} from './register.types';

const initialState = {};

export default function registerReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_REQUESTED:
      return {...state, data: action.payload};
    case REGISTER_SUCCESS:
      return {...state, data: action.payload};
    case REGISTER_FAILED:
      return {...state, data: action.payload};
    default:
      return state;
  }
}
