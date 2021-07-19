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

export const getAlbums = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/album/all`, form, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        setAlbums(res.data);
      })
      .catch((error) => {
        alert(
          error.response.data.error || "Erro desconhecido, tente novamente"
        );
      });
  }, [url]);
  return albums;
};
