import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToPictures } from "../routes/coordinator";

export const login = (form, history) => {
  axios
    .post(`${BASE_URL}/user/login`, form)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      alert("usuario logado!");
      goToPictures(history);
    })
    .catch((error) => {
      alert(error.response.data.error);
    });
};

export const signup = (form, history) => {
  axios
    .post(`${BASE_URL}/user/signup`, form)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      alert("usuario cadastrado!");
      goToPictures(history);
    })
    .catch((error) => {
      alert(error.response.data.error);
    });
};
