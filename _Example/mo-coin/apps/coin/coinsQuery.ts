import { CoinRequestType } from './coinBehaviours';
import { run } from './senderCoindHelper';

/* A constant variable that is used to store the base url of the API. */
const BASE_URL = 'https://api.coingecko.com/api/v3/';

/**
 * It takes a config object and returns a promise from the coins api as a query
 * @param {CoinRequestType} confg - CoinRequestType
 * @returns A promise
 */
export const getCoins = (confg: CoinRequestType) => {
  const params = {
    vs_currency: confg.currency,
    page: confg.page,
    per_page: confg.per_page || 40,
    price_change_percentage: confg.price_change || '24h,7d',
    filter: confg.filter || [],
  };

  return run({ baseURL: BASE_URL, url: 'coins/markets', params: params });
};

/**
 * It takes a config object, makes a request to the API, then uses the response to make another request
 * to the API. It can help full for filtering coins based on the supported currencies
 * @param {CoinRequestType} confg - CoinRequestType
 */
export const filteredCoins = (confg: CoinRequestType) => {
  // TODO: Based on your strategy, you can cache the simple/supported_vs_currencies API instead of loading each request
  return run({
    baseURL: BASE_URL,
    url: 'simple/supported_vs_currencies',
    params: confg,
  })
    .then((item) => {
      return getCoins({ page: confg.page, currency: 'usd', filter: item });
    })
    .catch((error) => {
      return Promise.reject(error)
    });
};
