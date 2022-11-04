import type { NextPage } from 'next';
import Head from 'next/head';
import AlertComponent from './UI/AlertComponent';
import CrightComponent from './UI/CrightComponent';
import { useDarkMode } from './Hook/useDarkMode';
import { useAppSelector, useAppDispatch } from '../../apps/state/hooks';
import { clean, selectError } from '../../apps/state/general/errorSlice';

/**
 * Children is a type that has a property called children that is a JSX.Element.
 * @property children - The children of the component.
 */
type Children = {
  children: JSX.Element;
};

const Layout: NextPage<Children> = ({ children }): JSX.Element => {
  const [colorTheme, DarkMode] = useDarkMode();
  const error = useAppSelector(selectError);
  const dispatch = useAppDispatch();

  const DarkModeComponent = () => {
    return DarkMode;
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {error && (
        <div onClick={() => dispatch(clean())}>
          <AlertComponent text={error.text!} type={error.type!} />
        </div>
      )}
      <div className="container mt-8 mb-3">{children}</div>
      <CrightComponent />
      <DarkModeComponent />
    </>
  );
};

export default Layout;
