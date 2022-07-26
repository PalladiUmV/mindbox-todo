export interface IState {
	items: IItems[];
	filter: string;
	search: string;
}


export interface IItems {
	id: number,
	label: string,
	important: boolean,
	done: boolean,
}

export interface IRoutesMap {
	[index: string]: string;
}

export interface IButtons {
	name: string;
	label: string;
}