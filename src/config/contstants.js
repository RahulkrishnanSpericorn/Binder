const baseUrl = process.env.REACT_APP_BASE_URL;
const originUrl = process.env.REACT_APP_ORIGIN_URL;
if (!baseUrl) {
    throw new Error("API Url is not provided.");
}
else if (!originUrl) {
    throw new Error("API Url is not provided.");
}
export const MAIN_ROUTE = `${baseUrl}/`;
export const API_ROUTE = `${baseUrl}`;
export const ORIGIN_URL = originUrl;
