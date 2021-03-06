import strorage from "good-storage";

const CURRENT_CITY = "_currentcity_";
const LOCATION = "_location";

//城市定位
export function SetCity(city) {
    strorage.set(CURRENT_CITY, city);
    return city;
}
export function Location(location) {
    strorage.set(LOCATION, location);
    return location;
}
// 读取
export function loadCity(){
    return strorage.get(CURRENT_CITY, "成都市");
}
export function loadLocation(){
    return strorage.get(CURRENT_CITY, "四川省成都市成华区保和万象街道办66号");
}


