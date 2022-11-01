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