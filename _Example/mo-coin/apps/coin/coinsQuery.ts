import { CoinRequestType } from './coinBehaviours';
import { run } from './senderCoindHelper';

const BASE_URL = 'https://api.coingecko.com/api/v3/';

export const getCoins = (confg: CoinRequestType) => {
  const params = {
    vs_currency: confg.currency,
    page: confg.page,
    per_page: confg.per_page || 40,
    price_change_percentage: confg.price_change || '24h,7d',
    filter: confg.filter || []
  };

  return run({ baseURL: BASE_URL, url: 'coins/markets', params: params});
};

export const filteredCoins = (confg: CoinRequestType) => {
  return run({
    baseURL: BASE_URL,
    url: 'simple/supported_vs_currencies',
    params: confg,
  })
    .then((item) => {
      return getCoins({ page: confg.page, currency: 'usd', filter: item });
    })
    .catch((err) => {
      console.log('this is error in sortfunctions');
    });
};

export const getSupportedCurrencies = () => {};
