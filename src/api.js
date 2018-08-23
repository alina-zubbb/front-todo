import axios from "axios";

export const axiosQuery = ({ method, url, token, data }) => {
  return axios({
    method: method,
    url: url,
    headers: token ? { "x-authorization-token": `bearer ${token}` } : null,
    data: data ? data : null
  }).catch(err => console.log("!!!!", err.message));
};
