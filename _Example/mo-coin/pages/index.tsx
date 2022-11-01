import type { NextPage } from 'next';
import { useState } from 'react';
import { getCoins } from '../apps/coin/coinsQuery';
import { useQuery } from '@tanstack/react-query';
import { CoinType } from '../apps/coin/coinBehaviours';
import LoadingComponent from '../template/layout/UI/LoadingComponent';

const Home: NextPage = (): JSX.Element => {
  const [page, setPage] = useState<number>(1);

  const fetchCoins = async ({
    queryKey,
  }: {
    queryKey: number[];
  }): Promise<any> => {
    const req = await getCoins({ page: queryKey[0], currency: 'usd' });
    return req;
  };

  const { isLoading, error, data } = useQuery([page], fetchCoins, {
    keepPreviousData: true,
  });

  if (isLoading) return <LoadingComponent />;

  if (error instanceof Error) {
    return <h1>'An error has occurred: ' + {error.message}</h1>;
  }

  return (
    <>
      {data.map((item: CoinType) => (
        <h3 key={item.symbol}>{item.name}</h3>
      ))}
    </>
  );
};

export default Home;
