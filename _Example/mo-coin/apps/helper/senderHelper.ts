import axios from 'axios';
import { CoinType } from '../coin/coinBehaviours';

/* Creating a new middleware of axios. */
export const run = axios.create();

/* Intercepting the request and response. */
run.interceptors.request.use(
  function (config) {
    // TODO: Prepare another config for post or custom API of a server
    config.headers = {
      Accept: 'application/json'
    }
    return config;
  },
  function (error) {
    // TODO: it should send the error log to server
    return Promise.reject(error);
  }
);

run.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    // TODO: it should send the error log to server
    console.log('This is response error', error.message)
    return Promise.reject(error);
  }
);
