import {userService} from "../Service/user.service";
import {USER_LOADING, USER_EDIT, LOAD_USER} from "../type";

const getUser = () => {
  return async dispatch => {
    try {
      dispatch({type: USER_LOADING, payload: true});

      const res = await userService.getUserData();
      dispatch({type: LOAD_USER, payload: {data: res}});
      dispatch({type: USER_LOADING, payload: false});
    } catch (error) {
      return error;
    }
  };
};

const editUser = (data, id) => {
  return async dispatch => {
    try {
      dispatch({type: USER_LOADING, payload: true});

      const res = await userService.editUserData(data, id);

      dispatch({type: USER_LOADING, payload: false});
      return res;
    } catch (error) {
      return error;
    }
  };
};
const deleteUser = id => {
  return async dispatch => {
    try {
      dispatch({type: USER_LOADING, payload: true});

      const res = await userService.deleteUserData(id);

      dispatch({type: USER_LOADING, payload: false});
      return res;
    } catch (error) {
      return error;
    }
  };
};

export const userAction = {
  getUser,
  editUser,
  deleteUser,
};
