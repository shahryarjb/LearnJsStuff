import type { NextPage } from 'next';
import { useState, useEffect, useRef } from 'react';
import { getCoins, filteredCoins } from '../apps/coin/coinsQuery';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import LoadingComponent from '../template/layout/UI/LoadingComponent';
import HomeTemplate from '../template/client/home/HomeTemplate';
import { useAppDispatch } from '../apps/state/hooks';
import { save, clean } from '../apps/state/general/errorSlice';

const Home: NextPage = (): JSX.Element => {
  const queryClient = useQueryClient();
  const [page, setPage] = useState<number>(1);
  const filteredDataSelection = useRef(false);
  const dispatch = useAppDispatch();

  /**
   * It fetches coins from the API, based on user selection filter.
   * @param {number} [page=1] - number = 1
   * @returns a promise.
   */
  const fetchCoins = async (page: number = 1): Promise<any> => {
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

  if (isLoading || isFetching) return <LoadingComponent />;

  /* A check to see if there is an error. If there is an error, it is dispatched to the redux store. */
  if (error instanceof Error) {
    dispatch(save({ text: error.message, type: 'danger' }));
    // TODO: in this part we can put some UI button to reload or sth.
    return <></>;
  } else {
    dispatch(clean())
  }

  /**
   * The user can navigate to the previous page or the next page with the assistance of this feature.
   * It is important to note that whenever the user requests to go on to the next page,
   * a check is performed to see whether or not the cache has been cleared.
   * @param {'previous' | 'next'} action - 'previous' | 'next'
   */
  const paginationHandler = (action: 'previous' | 'next') => {
    // TODO: Convert it as a hook
    // TODO: This code is not stable, it needs to be improved and separated, especially the next page part conditions
    // TODO: This part circumvents the pagination by pre-cache items because the API does not rerun the whole page
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

  /**
   * "When the user clicks the button, the filteredDataSelection state is set to true, and the refetch
   * function is called."
   *
   * The refetch function is a function that is passed to the component as a prop. It is a function
   * that is called when the component needs to be re-rendered
   */
  const supportedCoinsHandler = () => {
    filteredDataSelection.current = true;
    refetch();
  };

  /**
   * It resets the page to 1 and refetches the data
   */
  const resetDataHandler = () => {
    filteredDataSelection.current = false;
    setPage(1);
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
