import { FC, useMemo } from "react";
import { BEERS } from "~/constants/data";
import { BingoTile, type BingoBoard } from "~/types/beer-types";

const Tile: FC<{ tile: BingoTile }> = ({ tile }) => {
	const matchingBeer = useMemo(() => {
		const beer = BEERS.find((beer) => beer.id === tile.beerId);

		if (!beer) {
			throw new Error(`No beer found with id ${tile.beerId}`);
		}

		return beer;
	}, [tile.beerId]);

	return (
		<div
			className="w-16 bg-gray-800 text-white p-2 break-words hyphens-auto"
			key={tile.index}
		>
			{matchingBeer.name}
		</div>
	);
};

export const Board: FC<{ board: BingoBoard }> = ({ board }) => {
	return (
		<div className="grid grid-cols-5 gap-2 auto-rows-fr">
			{board.tiles.map((tile) => (
				<Tile tile={tile} key={tile.beerId} />
			))}
		</div>
	);
};
