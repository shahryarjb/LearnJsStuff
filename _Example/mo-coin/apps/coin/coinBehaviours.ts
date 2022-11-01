export interface CoinType {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  total_volume: number;
  price_change_percentage_24h: number;
  price_change_percentage_7d_in_currency: number;
  last_updated: Date;
  circulating_supply: number;
}

export interface CoinRequestType {
  vs_currency: string;
  page: number;
  per_page: number;
  price_change_percentage: string;
}

export interface CoinSuccessfulResponseType {}

export interface CoinUnsuccessfulResponseType {}

type SupportedCurrencies =
  | 'btc'
  | 'eth'
  | 'ltc'
  | 'bch'
  | 'bnb'
  | 'eos'
  | 'xrp'
  | 'xlm'
  | 'link'
  | 'dot'
  | 'yfi'
  | 'usd'
  | 'aed'
  | 'ars'
  | 'aud'
  | 'bdt'
  | 'bhd'
  | 'bmd'
  | 'brl'
  | 'cad'
  | 'chf'
  | 'clp'
  | 'cny'
  | 'czk'
  | 'dkk'
  | 'eur'
  | 'gbp'
  | 'hkd'
  | 'huf'
  | 'idr'
  | 'ils'
  | 'inr'
  | 'jpy'
  | 'krw'
  | 'kwd'
  | 'lkr'
  | 'mmk'
  | 'mxn'
  | 'myr'
  | 'ngn'
  | 'nok'
  | 'nzd'
  | 'php'
  | 'pkr'
  | 'pln'
  | 'rub'
  | 'sar'
  | 'sek'
  | 'sgd'
  | 'thb'
  | 'try'
  | 'twd'
  | 'uah'
  | 'vef'
  | 'vnd'
  | 'zar'
  | 'xdr'
  | 'xag'
  | 'xau'
  | 'bits'
  | 'sats';
