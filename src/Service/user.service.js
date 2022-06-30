import axios from "axios";
const URL = "https://smarthub-test.herokuapp.com/account";

const getUserData = () => {
  return axios
    .get(`${URL}`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
    })
    .then(res => {
      return res;
    })
    .catch(error => {
      throw error.response.data;
    });
};
const editUserData = (data, id) => {
  return axios
    .get(`${URL}/https://smarthub-test.herokuapp.com/account/:${id}`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      method: "PUT",
      data,
    })
    .then(res => {
      return res;
    })
    .catch(error => {
      throw error.response.data;
    });
};
const deleteUserData = id => {
  return axios
    .get(`${URL}/https://smarthub-test.herokuapp.com/account/delete/:${id}`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      method: "DELETE",
    })
    .then(res => {
      return res;
    })
    .catch(error => {
      throw error.response.data;
    });
};

export const userService = {
  getUserData,
  editUserData,
  deleteUserData,
};
