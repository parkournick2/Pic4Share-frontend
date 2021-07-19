import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../constants/urls";

export const create = (form) => {
  axios
    .post(`${BASE_URL}/picture/create`, form, {
      headers: { Authorization: localStorage.getItem("token") },
    })
    .then((res) => {
      alert(res.data.message || "Imagem criada com sucesso");
    })
    .catch((error) => {
      alert(error.response.data.error || "Erro desconhecido, tente novamente");
    });
};

export const searchPicture = (form) => {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/picture/search`, form, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        setPictures(res.data);
      })
      .catch((error) => {
        alert(
          error.response.data.error || "Erro desconhecido, tente novamente"
        );
      });
  }, [url]);
  return pictures;
};