import type { NextPage } from 'next';
import CoinsPartial from './components/CoinsPartial';
import HeaderPartial from './components/HeaderPartial';
import { CoinType } from '../../../apps/coin/coinBehaviours';

/* Defining the props that the HomeTemplate component will receive. */
interface HomeTemplateType {
  coins: CoinType[];
  pagination: (action: 'previous' | 'next') => void;
  page: number;
  supportedCoins: () => void;
  resetData: () => void;
}

const HomeTemplate: NextPage<HomeTemplateType> = ({
  coins,
  pagination,
  supportedCoins,
  resetData,
}) => {
  return (
    <>
      <HeaderPartial supportedCoins={supportedCoins} resetData={resetData} />
      <CoinsPartial coins={coins} pagination={pagination} />
    </>
  );
};

export default HomeTemplate;
