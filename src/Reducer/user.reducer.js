import {USER_LOADING, USER_EDIT, LOAD_USER} from "../type";

const initialState = {
  user_data: [],
  user_loading: false,
};

export default (state = {...initialState}, action) => {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        user_loading: action.payload,
      };
    case LOAD_USER:
      return {
        ...state,
        user_data: action.payload.data,
      };
    default:
      return state;
  }
};
