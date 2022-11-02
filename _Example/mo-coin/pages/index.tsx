import type { NextPage } from 'next';
import { useState } from 'react';
import { getCoins } from '../apps/coin/coinsQuery';
import { useQuery } from '@tanstack/react-query';
import LoadingComponent from '../template/layout/UI/LoadingComponent';
import HomeTemplate from '../template/client/home/HomeTemplate';

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

  return <HomeTemplate coins={data}/>;
};

export default Home;
