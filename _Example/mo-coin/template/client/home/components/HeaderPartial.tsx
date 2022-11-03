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

			<div className="flex justify-center mb-5" id="search">
				<div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
					<input
						type="search"
						className="form-control relative flex-auto min-w-0 block px-3 py-1.5 text-base font-normal text-black dark:text-gray-300 bg-transparent bg-clip-padding border border-solid border-gray-300 rounded-l transition ease-in-out m-0 focus:text-black dark:focus:text-gray-200 focus:bg-transparent dark:focus:text-white dark:focus:border-white focus:outline-none"
						placeholder="Search a Coin"
						aria-label="Search"
						aria-describedby="button-addon3"
					/>
					<button
						className="btn inline-block px-6 py-2 bg-gray-200 rounded-r text-gray-600 font-medium text-xs leading-tight uppercase  hover:bg-gray-300 hover:text-black focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
						type="button"
						id="button-addon3">
						Search
					</button>
				</div>
			</div>
		</>
	);
};

export default HeaderPartial;
