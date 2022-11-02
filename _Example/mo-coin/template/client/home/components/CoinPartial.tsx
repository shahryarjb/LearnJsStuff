import type { NextPage } from 'next';
import Image from "next/image";

const CoinPartial: NextPage = () => {
  return (
    <tr className="border-b dark:border-gray-700">
      <td className="p-2">1</td>
      <td className="p-2">
        <div className="flex items-center">
          <div id="coin-icon" className="mr-3">
            <Image
              src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png"
              alt="Bitcoin"
              width={30}
              height={30}
            />
          </div>
          <div id="coin-name">
            <h6 className="">Etherium</h6>
            <span className="text-gray-500 text-xs">ETH</span>
          </div>
        </div>
      </td>
      <td className="p-2">
        <span>$</span>
        <span>938475,4</span>
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
        <span className="inline-block">0.48</span>
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
        <span className="inline-block">0.48</span>
        <span className="inline-block ml-1">%</span>
      </td>
      <td className="p-2">
        <span>$</span>
        <span>938475,4</span>
      </td>
      <td className="p-2">
        <span>$</span>
        <span>938475,4</span>
      </td>
      <td className="p-2">
        <span className="inline-block">8493480239</span>
        <span className="inline-block ml-1 text-gray-500">BTC</span>
      </td>
    </tr>
  );
};

export default CoinPartial;
