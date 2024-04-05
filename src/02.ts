import { GovernmentBuildingType, HousesType } from "./02_01";

export const getStreetsTitlesOfGovernmentBuildings = (buildings: Array<GovernmentBuildingType>) => {
	// return buildings.map((building) => {
	// 	building.address.street.title
	// })
	return buildings.map(building => building.address.street.title)
}

export const getStreetsTitlesOfHouses = (houses: Array<HousesType>) => {
	return houses.map(house => house.address.street.title)
}

export const createMessage = (houses: Array<HousesType>) => {
	return houses.map(house => `Hello guys for ${house.address.street.title}`)
}