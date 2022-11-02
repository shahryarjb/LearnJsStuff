import type { NextPage } from "next";
import CoinsPartial from "./components/CoinsPartial";
import HeaderPartial from "./components/HeaderPartial";
import { CoinType } from "../../../apps/coin/coinBehaviours";
import useDarkMode from "../../layout/Hook/useDarkMode";

interface HomeTemplateType {
	coins: CoinType[];
	pagination: (action: "previous" | "next") => void;
	page: number;
}

const HomeTemplate: NextPage<HomeTemplateType> = ({ coins, pagination }) => {
	const [colorTheme, setTheme] = useDarkMode();

	console.log(colorTheme);

	return (
		<>
			<div>
				{colorTheme === "light" ? (
					<svg
						onClick={() => setTheme("light")}
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6 fixed top-5 left-5 text-white cursor-pointer"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
						/>
					</svg>
				) : (
					<svg
						onClick={() => setTheme("dark")}
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6 fixed top-5 left-5 text-black cursor-pointer text-w"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
						/>
					</svg>
				)}
			</div>
			<HeaderPartial />
			<CoinsPartial coins={coins} pagination={pagination} />
		</>
	);
};

export default HomeTemplate;
