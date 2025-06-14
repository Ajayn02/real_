import base_url from "./base_url";
import commonApi from "./commonApi";

export const getUserDetails = async () => {
    return await commonApi(`${base_url}/users/user`, "GET", '', '')
}
