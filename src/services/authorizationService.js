/* eslint-disable no-unused-vars */
import axios from "axios";
import { API_ROUTE, ORIGIN_URL } from "../config/contstants";

export const binderGateWay = axios.create({
    baseURL: API_ROUTE,
    timeout: 300000,
    withCredentials: true,
    headers: {}
});

binderGateWay.interceptors.response.use(
    res => {
        return res;
    },
    function (res) {
        if (res.response && res.response.status === 401) {
            localStorage.clear();
            window.location.href = "/";
        }
        return res;
    }
);

binderGateWay.interceptors.request.use(function (config) {
    const token = localStorage.getItem("binder-token");
    config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
        "Access-Control-Allow-Origin": ORIGIN_URL,
    };
    return config;
});

// export const restCountriesGateWay = axios.create({
//     baseURL: "https://restcountries.eu",
//     timeout: 20000
// });
