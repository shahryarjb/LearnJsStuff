import type { NextPage } from 'next';
import { useState, useEffect, useRef } from 'react';
import { getCoins, filteredCoins } from '../apps/coin/coinsQuery';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import LoadingComponent from '../template/layout/UI/LoadingComponent';
import HomeTemplate from '../template/client/home/HomeTemplate';

const Home: NextPage = (): JSX.Element => {
  const queryClient = useQueryClient();
  const [page, setPage] = useState<number>(1);
  const filteredDataSelection = useRef(false);

  /**
   * It fetches coins from the API, based on user selection filter.
   * @param {number} [page=1] - number = 1
   * @returns a promise.
   */
  const fetchCoins = async (page: number = 1): Promise<any> => {
    console.log(page)
    const req = filteredDataSelection.current
      ? await filteredCoins({ page: page, currency: 'usd' })
      : await getCoins({ page: page, currency: 'usd' });
    return req;
  };

  /* A hook from react-query. It is a hook that is used to fetch data from the server. */
  const { isLoading, error, data, isFetching, refetch } = useQuery(
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

  /**
   * The user can navigate to the previous page or the next page with the assistance of this feature. 
   * It is important to note that whenever the user requests to go on to the next page, 
   * a check is performed to see whether or not the cache has been cleared.
   * @param {'previous' | 'next'} action - 'previous' | 'next'
   */
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
      console.log('paginationHandler', action, page)
      setPage((perv) => perv + 1);
    }

    document
      .querySelector('#logo')
      ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const supportedCoinsHandler = () => {
    filteredDataSelection.current = true;
    refetch();
  };

  const resetDataHandler = () => {
    filteredDataSelection.current = false;
    setPage(1)
    refetch();
  };

  return (
    <HomeTemplate
      coins={data}
      pagination={paginationHandler}
      page={page}
      supportedCoins={supportedCoinsHandler}
      resetData={resetDataHandler}
    />
  );
};

export default Home;
