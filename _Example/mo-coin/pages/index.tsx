import type { NextPage } from 'next';
import { useState } from 'react';
import { getCoins } from '../apps/coin/coins';
import { useQuery } from '@tanstack/react-query';

type UseQuery = {
  isLoading: boolean;
  error: object;
};

const Home: NextPage = (): JSX.Element => {
  const [page, setPage] = useState<number>(1);

  const fetchDara = async ({ queryKey }: { queryKey: number[] }) => {
    const req = await getCoins({ page: queryKey[0], currency: 'usd' });
    return req;
  };

  const { isLoading, error, data } = useQuery([page], fetchDara);

  if (isLoading) return <h1>'Loading...'</h1>;

  if (error instanceof Error) {
    return <h1>'An error has occurred: ' + {error.message}</h1>;
  }

  return (
    <h1
      className="text-3xl font-bold underline"
      onClick={() => console.log(data)}
    >
      Hello world!
    </h1>
  );
};

export default Home;
