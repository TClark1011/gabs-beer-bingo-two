export type Beer = {
	id: number;
	section: number;
	name: string;
	flavour: string;
	company: string;
};

export type BingoTile = {
	beerId: number;
	index: number;
};

export type BingoBoard = {
	tiles: BingoTile[];
};
