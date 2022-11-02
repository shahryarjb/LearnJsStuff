import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { getCoins } from '../apps/coin/coinsQuery';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import LoadingComponent from '../template/layout/UI/LoadingComponent';
import HomeTemplate from '../template/client/home/HomeTemplate';

const Home: NextPage = (): JSX.Element => {
  const queryClient = useQueryClient();
  const [page, setPage] = useState<number>(1);

  const fetchCoins = async (page: number = 1): Promise<any> => {
    const req = await getCoins({ page: page, currency: 'usd' });
    return req;
  };

  const { isLoading, error, data, isFetching } = useQuery(
    ['coins', page],
    () => fetchCoins(page),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      staleTime: 50000,
    }
  );

  // Prefetch the next page!
  useEffect(() => {
    if (data) {
      queryClient.prefetchQuery(['coins', page + 1], () =>
        fetchCoins(page + 1)
      );
    }
  }, [data, page, queryClient]);

  if (isLoading) return <LoadingComponent />;

  if (error instanceof Error) {
    return <h1>'An error has occurred: ' + {error.message}</h1>;
  }

  const paginationHandler = (action: 'previous' | 'next') => {
    // TODO: check we can convert it as a hook or not
    const newCloneOfQueryClient: any = Object.assign({}, queryClient);
    const getCacheFromNextPage = newCloneOfQueryClient.queryCache.queries;
    const filteredCachedNextPage = getCacheFromNextPage.find(
      (item: any) => item.queryKey[1] === page + 1
    );

    if (action === 'previous' && page > 1) {
      setPage((perv) => perv - 1);
    }

    if (
      action === 'next' &&
      filteredCachedNextPage &&
      !isFetching &&
      !isLoading &&
      filteredCachedNextPage.state &&
      filteredCachedNextPage.state.data.length > 0
    ) {
      setPage((perv) => perv + 1);
    }

    document
      .querySelector('#logo')
      ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <HomeTemplate coins={data} pagination={paginationHandler} page={page} />
  );
};

export default Home;
