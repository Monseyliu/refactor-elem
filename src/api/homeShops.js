import axios from "axios";

const debug = process.env.NODE_ENV !== "production"

//轮播
export function getData(){
    const url = debug ? "/api/profile/shopping" : "";

    return axios(url).then(res => {
        return Promise.resolve(res.data)
    })
}