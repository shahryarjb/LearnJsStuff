import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { useEffect } from 'react';
import { getCoins } from '../apps/coin/coins';

const Home: NextPage = () => {
  const fetchDara = async () => {
    const req = await getCoins({page: 1, currency: 'usd'});
    console.log(req.data)
  };

  useEffect(() => {
    fetchDara()
  }, []);

  return (
    <h1 className="text-3xl font-bold underline" onClick={() => fetchDara()}>
      Hello world!
    </h1>
  );
};

export default Home;
