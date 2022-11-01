import axios from 'axios';

export const run = axios.create();

run.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.headers = {
      Accept: 'application/json'
    }
    return config;
  },
  function (error) {
    // TODO: it should send log to server
    return Promise.reject(error);
  }
);

run.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    console.log('This is response error', error.message)
    return Promise.reject(error);
  }
);
