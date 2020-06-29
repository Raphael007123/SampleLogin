import {combineReducers} from 'redux';
import loginReducer from './login/login.reducer';
import registerReducer from './register/register.reducer';

export default combineReducers({
  login: loginReducer,
  register: registerReducer,
});
