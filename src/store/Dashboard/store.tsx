export interface IDashboardStore {
	datasource: statics[];
	filter: Type;
}

export interface statics {
	Type: Type;
	Num: number;
}

export enum Type {
	"One",
	"Two",
	"Three"
}
