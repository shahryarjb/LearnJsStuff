import type { NextPage } from 'next';
import Image from 'next/image';
import { CoinType } from '../../../../apps/coin/coinBehaviours';

const CoinPartial: NextPage<CoinType> = (coin) => {
  return (
    <tr className="border-b dark:border-gray-700">
      <td className="p-2">
        <div className="flex items-center">
          <div id="coin-icon" className="mr-3">
            <Image
              src={coin.image}
              alt={coin.name}
              width={30}
              height={30}
              className="w-[30px] h-[30px] max-w-[30px]"
              priority={true}
            />
          </div>
          <div id="coin-name">
            <h6 className="">{coin.name}</h6>
            <span className="text-gray-500 text-xs">{coin.symbol}</span>
          </div>
        </div>
      </td>
      <td className="p-2">
        <span>$</span>
        <span>{coin.current_price}</span>
      </td>
      <td className="p-2 text-green-600">
        <span className="inline-block mr-1 text-xs">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-3 h-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        </span>
        <span className="inline-block">
          {coin.price_change_percentage_7d_in_currency.toFixed(3)}
        </span>
        <span className="inline-block ml-1">%</span>
      </td>
      <td className="p-2 text-rose-800">
        <span className="inline-block mr-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-3 h-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
        <span className="inline-block">
          {coin.price_change_percentage_7d_in_currency.toFixed(3)}
        </span>
        <span className="inline-block ml-1">%</span>
      </td>
      <td className="p-2">
        <span>$</span>
        <span>{coin.market_cap}</span>
      </td>
      <td className="p-2">
        <span>$</span>
        <span>{coin.total_volume}</span>
      </td>
      <td className="p-2">
        <span className="inline-block">{coin.circulating_supply}</span>
        <span className="inline-block ml-1 text-gray-500">
          {coin.symbol.toUpperCase()}
        </span>
      </td>
    </tr>
  );
};

export default CoinPartial;
