import { CoinRequestType } from './coinBehaviours';
import { run } from '../helper/senderHelper';

const BASE_URL = 'https://api.coingecko.com/api/v3/coins/';

export const getCoins = (confg: CoinRequestType) => {
  const params = {
    vs_currency: confg.currency,
    page: confg.page,
    per_page: confg.per_page || 20,
    price_change_percentage: confg.price_change || '24h,7d',
  };

  return run({ baseURL: BASE_URL, url: 'markets', params: params });
};

export const sortCoins = () => {};

export const getSupportedCurrencies = () => {};
