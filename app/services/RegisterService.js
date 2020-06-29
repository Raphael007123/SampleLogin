import {getItem, setItem} from '../utils/asyncStorageHelper';
import {Messages} from '../constants/Constants';

export const registerUser = async (username, password) => {
  let data = {};
  data = await getItem(username).then(response => {
    if (response) {
      return {success: false, message: Messages.EMAIL_ALREADY_USED};
    } else {
      setItem(username, password);
      return {success: true, message: Messages.USER_REGISTERED_SUCCESSFULLY};
    }
  });
  return data;
};
