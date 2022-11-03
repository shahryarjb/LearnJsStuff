import axios from 'axios';

// If you want to see something manually for this use case, please see this code:
// https://github.com/mishka-group/mishka-cms-front/blob/32194cc289db72cdec44ddb37b2e1ade8b710c82/apps/mishka_content/helper/contentHelper.ts

/* Creating a new middleware of axios. */
export const run = axios.create();

/* Intercepting the request and response. */
run.interceptors.request.use(
  function (config) {
    // TODO: Prepare another config for post or custom API of a server
    config.headers = {
      Accept: 'application/json',
    };

    return config;
  },
  function (error) {
    // TODO: it should send the error log to server
    return Promise.reject(error);
  }
);

run.interceptors.response.use(
  function (response) {
    // we filter the data base on user requested coins
    if (
      response.config.params.hasOwnProperty('filter') &&
      response.config.params.filter.length > 1
    ) {
      const resp = response.data.filter((item: any) => {
        return response.config.params.filter.includes(item.symbol);
      });
      return resp;
    }
    return response.data;
  },
  function (error) {
    // TODO: it should send the error log to server
    return Promise.reject(error);
  }
);
