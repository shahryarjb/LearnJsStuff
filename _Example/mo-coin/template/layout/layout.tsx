import type { NextPage } from 'next';
import Head from 'next/head';
import AlertComponent from './UI/AlertComponent';
import CrightComponent from './UI/CrightComponent';

type Children = {
  children: JSX.Element;
};

const Layout: NextPage<Children> = ({ children }): JSX.Element => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <AlertComponent text="It should be like dynamic error" type="danger" />
      <div className="container mb-8">{children}</div>
      <CrightComponent />
    </>
  );
};

export default Layout;
