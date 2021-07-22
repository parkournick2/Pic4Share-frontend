import axios from "axios";
import { BASE_URL } from "../constants/urls";

export const createPicture = (form) => {
  axios
    .post(`${BASE_URL}/picture/create`, form, {
      headers: { Authorization: localStorage.getItem("token") },
    })
    .then((res) => {
      alert(res.data.message || "Imagem criada com sucesso");
      window.location.reload();
    })
    .catch((error) => {
      alert(error.response.data.error || "Erro desconhecido, tente novamente");
    });
};

export const searchPicture = async (form) => {
  const pictures = await axios
    .post(`${BASE_URL}/picture/search`, form, {
      headers: { Authorization: localStorage.getItem("token") },
    })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      alert(error.response.data.error || "Erro desconhecido, tente novamente");
    });
  return pictures;
};
