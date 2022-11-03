import type { NextPage } from 'next';

/**
 * BtnProps is an object with three properties: title, isActive, and callBack.
 * 
 * title is a string
 * isActive is a boolean
 * callBack is a function
 * @property {string} title - The text that will be displayed on the button
 * @property {boolean} isActive - This is a boolean value that determines whether the button is active
 * or not.
 * @property {any} callBack - This is the function that will be called when the button is clicked.
 */
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
