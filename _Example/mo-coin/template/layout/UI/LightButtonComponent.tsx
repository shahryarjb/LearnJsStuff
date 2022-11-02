import type { NextPage } from 'next';

type BtnProps = {
  title: string
  isActive: boolean
  callBack: any
}
const LightButtonComponent: NextPage<BtnProps>  = ({ title, isActive, callBack }) => {
  const activeBtnCreator = isActive
    ? 'active [&.active]:bg-white text-black focus:text-black'
    : 'hover:bg-white focus:bg-white hover:text-black hover:text-black focus:text-black';

  return (
    <button
      type="button"
      className={`rounded bg-zinc-400 text-color-black px-3 py-1 m-2 shadow-lg shadow-black/60 ${activeBtnCreator}`}
      onClick={callBack}
    >
      {title}
    </button>
  );
};

export default LightButtonComponent;
