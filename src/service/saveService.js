import base_url from "./base_url";
import commonApi from "./commonApi";

export const savedPosts = async () => {
    return await commonApi(`${base_url}/save`, 'GET', '', '')
}
