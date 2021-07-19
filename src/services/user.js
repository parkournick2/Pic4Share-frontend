import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToAlbums, goToLogin } from "../routes/coordinator";

export const login = (form, history) => {
  axios
    .post(`${BASE_URL}/user/login`, form)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      alert(error.response.data.message || "Usuário logado");
      goToAlbums(history);
    })
    .catch((error) => {
      alert(error.response.data.error || "Erro desconhecido, tente novamente");
    });
};

export const signup = (form, history) => {
  axios
    .post(`${BASE_URL}/user/signup`, form)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      alert(error.response.data.message || "Usuário registrado");
      goToPictures(history);
    })
    .catch((error) => {
      alert(error.response.data.error || "Erro desconhecido, tente novamente");
    });
};

export const logout = (history) => {
  localStorage.removeItem("token");
  goToLogin(history);
};