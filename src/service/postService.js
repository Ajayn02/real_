import base_url from "./base_url";
import commonApi from "./commonApi";

export const getPosts = async () => {
    return await commonApi(`${base_url}/posts`, 'GET', '', '')
}

export const getUniquePost = async (params) => {
    return await commonApi(`${base_url}/posts/${params.id}`, 'GET', '', '')
}

export const getUserPosts = async () => {
    return await commonApi(`${base_url}/posts/user`, 'GET', '', '')
}


