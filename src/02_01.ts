export type HousesType = {
	buildedAt: number
	repaired: boolean
	address: AdressType
}

export type AdressType = {
	number?: number
	street: StreetType
}

export type StreetType = {
	title: string
}

export type GovernmentBuildingType = {
	type: 'HOSPITAL' | 'FIRE-STATION'
	budget: number
	staffCount: number
	address: AdressType
}

export type CityType = {
	title: string
	houses: Array<HousesType>
	governmentBuildings: Array<GovernmentBuildingType>
	citizensNumber: number
}