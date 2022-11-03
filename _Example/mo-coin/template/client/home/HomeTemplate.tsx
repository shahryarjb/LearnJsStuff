import type { NextPage } from 'next';
import CoinsPartial from './components/CoinsPartial';
import HeaderPartial from './components/HeaderPartial';
import { CoinType } from '../../../apps/coin/coinBehaviours';
import { useEffect } from 'react';

interface HomeTemplateType {
  coins: CoinType[];
  pagination: (action: 'previous' | 'next') => void;
  page: number;
}

const HomeTemplate: NextPage<HomeTemplateType> = ({ coins, pagination }) => {
  return (
    <>
      <HeaderPartial />
      <CoinsPartial coins={coins} pagination={pagination} />
    </>
  );
};

export default HomeTemplate;
