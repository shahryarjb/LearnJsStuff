import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { getCoins } from '../apps/coin/coinsQuery';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import LoadingComponent from '../template/layout/UI/LoadingComponent';
import HomeTemplate from '../template/client/home/HomeTemplate';

const Home: NextPage = (): JSX.Element => {
  const queryClient = useQueryClient();
  const [page, setPage] = useState<number>(1);

  const fetchCoins = async ({
    queryKey,
  }: {
    queryKey: [string, number];
  }): Promise<any> => {
    const req = await getCoins({ page: queryKey[1], currency: 'usd' });
    return req;
  };

  const { isLoading, error, data, isFetching } = useQuery(
    ['coins', page],
    fetchCoins,
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      staleTime: 5000,
    }
  );

  // Prefetch the next page!
  useEffect(() => {
    if (data?.hasMore) {
      queryClient.prefetchQuery(['coins', page + 1], () => fetchCoins);
    }
  }, [data, page, queryClient]);

  if (isLoading) return <LoadingComponent />;

  if (error instanceof Error) {
    return <h1>'An error has occurred: ' + {error.message}</h1>;
  }

  const paginationHandler = (action: 'pervious' | 'next') => {
    action === 'next'
      ? setPage((perv) => perv + 1)
      : setPage((perv) => perv - 1);
  };

  return (
    <HomeTemplate coins={data} pagination={paginationHandler} page={page} />
  );
};

export default Home;
