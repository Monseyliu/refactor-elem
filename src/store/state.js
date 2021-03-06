import { loadCity, loadLocation } from "config/cache"

const state = {
    currentCity: loadCity(),
    location: loadLocation()
}

export default state;