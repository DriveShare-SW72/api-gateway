import axios, { AxiosResponse } from "axios";

const BASE_URL = process.env.BASE_URL

const http = (config) : Promise<AxiosResponse> => {
  return new Promise((resolve, reject) => {
    axios({...config, baseURL: BASE_URL, widthCredentials: true})
      .then((response) => resolve(response as AxiosResponse))
      .catch((error) => reject(error));
  });
};

export default http;