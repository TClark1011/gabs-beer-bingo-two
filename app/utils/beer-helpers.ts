import { BEERS, BOARD_DIMENSION } from "~/constants/data";
import { BingoBoard, BingoTile } from "~/types/beer-types";
import { pickFirstNItems, shuffleArray } from "~/utils/misc";

export const generateBingoBoard = (): BingoBoard => {
	const shuffledBeers = shuffleArray(BEERS);

	const selectedBeers = pickFirstNItems(shuffledBeers, BOARD_DIMENSION ^ 2);

	const tiles: BingoTile[] = selectedBeers.map((beer, index) => ({
		beerId: beer.id,
		index,
	}));

	return {
		tiles,
	};
};
