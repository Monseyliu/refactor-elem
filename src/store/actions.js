import { SetCity, Location } from "config/cache";
import * as types from "./mutation-types";


//城市定位等
export const SetCurrentCity = function({ commit }, city) {
    commit(types.SET_CURRENT_CITY, SetCity(city));
}
export const SetLocation = function({commit}, location) {
    commit(types.SET_LOCATION, Location(location))
}