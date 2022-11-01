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
  page: number;
  currency: string;
  price_change?: string;
  per_page?: number
}