import type { MetaFunction } from "@remix-run/node";
import { Board } from "~/components/board";
import { generateBingoBoard } from "~/utils/beer-helpers";
import "~/styles/global.css";

export const meta: MetaFunction = () => {
	return [
		{ title: "New Remix SPA" },
		{ name: "description", content: "Welcome to Remix (SPA Mode)!" },
	];
};

const board = generateBingoBoard();

export default function Index() {
	return (
		<div className="h-screen w-screen flex justify-center items-center bg-gray-900">
			<Board board={board} />
		</div>
	);
}
