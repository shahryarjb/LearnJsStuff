import type { NextPage } from 'next';
import CoinPartial from './CoinPartial';
import { CoinType } from '../../../../apps/coin/coinBehaviours';
import LightButtonComponent from '../../../layout/UI/LightButtonComponent';

const CoinsPartial: NextPage<{
  coins: CoinType[];
  pagination: (action: 'previous' | 'next') => void;
}> = ({ coins, pagination }) => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-sm text-black dark:text-gray-400">
              <thead className="text-xs uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                <tr className="text-left">
                  <th className="p-2">COINS</th>
                  <th className="p-2">PRICE</th>
                  <th className="p-2">24H</th>
                  <th className="p-2">7D</th>
                  <th className="p-2">MARKET CAP</th>
                  <th className="p-2">TOTAL VOLUME</th>
                  <th className="p-2">CIRCULATING SUPPLY</th>
                </tr>
              </thead>
              <tbody className="dark:text-white">
                {coins.map((item: CoinType) => (
                  <CoinPartial key={item.id} {...item} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <p className="text-center mt-1">
        <LightButtonComponent
          title="Next"
          isActive={false}
          callBack={() => pagination('next')}
        />
        <LightButtonComponent
          title="Previous"
          isActive={false}
          callBack={() => pagination('previous')}
        />
      </p>
    </div>
  );
};

export default CoinsPartial;
