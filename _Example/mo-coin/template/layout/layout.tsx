import type { NextPage } from 'next';
import Head from 'next/head';

type Children = {
  children: JSX.Element;
};

const Layout: NextPage<Children> = ({ children }): JSX.Element => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {children}
    </>
  );
};

export default Layout;
