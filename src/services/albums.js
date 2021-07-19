import axios from "axios";
import { BASE_URL } from "../constants/urls";

export const createAlbum = (form) => {
  axios
    .post(`${BASE_URL}/album/create`, form, {
      headers: { Authorization: localStorage.getItem("token") },
    })
    .then((res) => {
      alert(res.data.message || "Album criado com sucesso");
    })
    .catch((error) => {
      alert(error.response.data.error || "Erro desconhecido, tente novamente");
    });
};

export const getAlbums = async () => {
  const albums = await axios
    .get(`${BASE_URL}/album/all`, {
      headers: { Authorization: localStorage.getItem("token") },
    })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      alert(error.response.data.error || "Erro desconhecido, tente novamente");
      return [];
    });
  return albums;
};
