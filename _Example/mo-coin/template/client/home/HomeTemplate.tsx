import type { NextPage } from 'next';
import CoinsPartial from './components/CoinsPartial';
import HeaderPartial from './components/HeaderPartial';
import { CoinType } from '../../../apps/coin/coinBehaviours';

interface HomeTemplateType {
  coins: CoinType[]
  pagination: (action: 'pervious' | 'next') => void
  page: number
}

const HomeTemplate: NextPage<HomeTemplateType> = ({
  coins,
  pagination,
  page
}) => {
  return (
    <>
      <HeaderPartial />
      <CoinsPartial coins={coins} />
      <p><button onClick={() => pagination('next')}>+ - {page}</button></p>
      <p><button onClick={() => pagination('pervious')}>+ - {page}</button></p>
    </>
  );
};

export default HomeTemplate;

{
  /* <div className="flex justify-center mb-5" id="search">
          <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
            <input
              type="search"
              className="form-control relative flex-auto min-w-0 block px-3 py-1.5 text-base font-normal text-gray-300 bg-transparent bg-clip-padding border border-solid border-gray-300 rounded-l transition ease-in-out m-0 focus:text-gray-200 focus:bg-transparent focus:text-white focus:border-white focus:outline-none"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon3"
            />
            <button
              className="btn inline-block px-6 py-2 bg-gray-200 rounded-r text-gray-600 font-medium text-xs leading-tight uppercase  hover:bg-gray-300 hover:text-black focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              type="button"
              id="button-addon3">
              Search
            </button>
          </div>
        </div> */
}
