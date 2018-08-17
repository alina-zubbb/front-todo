import axios from "axios";

export const axiosQuery = ({ method, url, token, data }) => {
  console.log("axiosQuery params: ", method, url, token);
  return axios({
    method: method,
    url: url,
    headers: token ? { "x-authorization-token": `bearer ${token}` } : null,
    data: data ? data : null
  });
};
