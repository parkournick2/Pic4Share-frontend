import { useEffect, useState } from "react";
import axios from "axios";

const useRequestData = (initialData, url) => {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    axios
      .get(url, { headers: { Authorization: localStorage.getItem("token") } })
      .then((res) => {
        setData(res.data.result);
      })
      .catch((error) => {
        alert(error.response.data.error || "Tente novamente mais tarde");
      });
  }, [url]);
  return data;
};

export default useRequestData;
