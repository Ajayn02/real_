import base_url from "./base_url";
import commonApi from "./commonApi";

// user
export const getAllUsers = async () => {
    return await commonApi(`${base_url}/users`, "GET", '', '')
}

// report
export const getAllReports = async () => {
    return await commonApi(`${base_url}/reports`, "GET", '', '')
}

// post
export const getAdminPosts = async () => {
    return await commonApi(`${base_url}/admin/posts`, "GET", '', '')
}
