import base_url from "./base_url";
import commonApi from "./commonApi";

// user
export const getAllUsers = async ({ search }) => {
    return await commonApi(`${base_url}/users?search=${search}`, "GET", '', '')
}
// report
export const getAllReports = async () => {
    return await commonApi(`${base_url}/reports`, "GET", '', '')
}

// post
export const getAdminPosts = async ({ search }) => {
    return await commonApi(`${base_url}/admin/posts?search=${search}`, "GET", '', '')
}

//analytics
export const getPostAnalytics = async () => {
    return await commonApi(`${base_url}/admin/post-analytics`, "GET", '', '')
}

export const getUserAnalytics = async () => {
    return await commonApi(`${base_url}/admin/user-analytics`, "GET", '', '')
}
