import axios from "axios";

export const postDatos = (url, objeto, headers, setStatusText) => {
  axios
    .post(url, objeto, {headers})
    .then(function (response) {
      console.log(response.data);
      console.log(response.statusText)
      setStatusText(response.statusText)
    })
    .catch(function (error) {
      console.log(error);
    });
};
