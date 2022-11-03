import type { NextPage } from "next";
import Image from "next/image";
import LightButtonComponent from "../../../layout/UI/LightButtonComponent";

const HeaderPartial: NextPage<{supportedCoins: () => void, resetData: () => void}> = ({supportedCoins, resetData}) => {
	return (
		<>
			<div className="my-7" id="logo">
				<Image
					className="dark:bg-white p-4 mx-auto border-[1px] border-black rounded-full dark:shadow-lg dark:shadow-black/60"
					src="/logo.png"
					alt="Mishka Group"
					width={130}
					height={130}
					priority={true}
				/>
			</div>

			<div className="btn-wrapper text-center mb-5">
				<LightButtonComponent
					title="Supported Coins"
					isActive={false}
					callBack={() => supportedCoins()}
				/>
				<LightButtonComponent
					title="Reset data"
					isActive={false}
					callBack={() => resetData()}
				/>
			</div>
		</>
	);
};

export default HeaderPartial;
