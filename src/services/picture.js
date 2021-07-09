import axios from "axios";
import { BASE_URL } from "../constants/urls";

export const create = (form) => {
  axios
    .post(`${BASE_URL}/picture/create`, form, {
      headers: { Authorization: localStorage.getItem("token") },
    })
    .then((res) => {
      alert(res.data.message);
    })
    .catch((error) => {
      alert(error.response.data.error);
    });
};
