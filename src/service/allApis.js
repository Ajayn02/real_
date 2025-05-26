import base_url from "./base_url";
import commonApi from "./commonApi";


export const registerUser = async (data) => {
    return await commonApi(`${base_url}/auth`, 'POST', '', data)
}

export const loginUser = async (data) => {
    return await commonApi(`${base_url}/auth/login`, 'POST', '', data)
}

export const getPosts = async (header) => {
    return await commonApi(`${base_url}/posts`, 'GET', header, '')
}