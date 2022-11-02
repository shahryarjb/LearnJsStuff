import type { NextPage } from 'next';
import Image from 'next/image';
import LightButtonComponent from '../../../layout/UI/LightButtonComponent';

const HeaderPartial: NextPage = () => {
  return (
    <>
      <div className="my-7" id="logo">
        <Image
          className="bg-white p-4 mx-auto rounded-full shadow-lg shadow-black/60"
          src="/../public/logo.png"
          alt="Mishka Group"
          width={130}
          height={130}
          priority={true}
        />
      </div>

      <div className="btn-wrapper text-center mb-5">
        <LightButtonComponent title="24H" isActive={false} callBack={() => {}}/>
        <LightButtonComponent title="7D" isActive={false} callBack={() => {}} />
        <LightButtonComponent title="14D" isActive={true} callBack={() => {}} />
        <LightButtonComponent title="14D" isActive={false} callBack={() => {}} />
      </div>
    </>
  );
};

export default HeaderPartial;
