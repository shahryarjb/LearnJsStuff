import type { NextPage } from 'next';

type BtnProps = {
  title: string
  isActive: boolean
}
const LightButtonComponent: NextPage<BtnProps>  = ({ title, isActive }) => {
  const activeBtnCreator = isActive
    ? 'active [&.active]:bg-white text-black'
    : 'hover:bg-white focus:bg-white hover:text-black';

  return (
    <button
      type="button"
      className={`rounded bg-zinc-400 text-color-black px-3 py-1 m-2 shadow-lg shadow-black/60 ${activeBtnCreator}`}
    >
      {title}
    </button>
  );
};

export default LightButtonComponent;
