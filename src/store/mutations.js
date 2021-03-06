import * as typs from "./mutation-types";

const mutations = {
    [typs.SET_CURRENT_CITY](state, city) {
        state.currentCity = city;
    },
    [typs.SET_LOCATION](state, location) {
        state.location = location;
    }
}

export default mutations;