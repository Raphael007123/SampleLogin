import {getItem} from '../utils/asyncStorageHelper';

export const loginUser = async (username, password) => {
  let data = {};
  data = await getItem(username).then(response => {
    if (response) {
      if (response === password) {
        return {success: true, message: 'Login Success'};
      } else {
        return {success: false, message: 'Password Wrong'};
      }
    } else {
      return {success: false, message: 'User not registered'};
    }
  });
  return data;
};
