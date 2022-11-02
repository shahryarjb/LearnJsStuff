import type { NextPage } from 'next';
import CoinPartial from './CoinPartial';
import { CoinType } from '../../../../apps/coin/coinBehaviours';

const CoinsPartial: NextPage<{ coins: CoinType[] }> = ({ coins }) => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-sm text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr className="text-left">
                  <th className="p-2">#</th>
                  <th className="p-2">COINS</th>
                  <th className="p-2">PRICE</th>
                  <th className="p-2">24H</th>
                  <th className="p-2">7D</th>
                  <th className="p-2">MARKET CAP</th>
                  <th className="p-2">TOTAL VOLUME</th>
                  <th className="p-2">CIRCULATING SUPPLY</th>
                </tr>
              </thead>
              <tbody className="text-white">
                {coins.map((item: CoinType) => (
                  <CoinPartial key={item.id} {...item}/>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinsPartial;
