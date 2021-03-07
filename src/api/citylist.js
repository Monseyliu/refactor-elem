import axios from "axios";

const debug = process.env.NODE_ENV !== "production"

// 获取城市列表
export function getCitylist() {
    const url = debug ? "/api/posts/cities" : "";
    return axios(url).then(res => {
        return Promise.resolve(res.data);
    })
}