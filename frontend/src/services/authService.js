import { getRequest, postRequest } from "./api.js";

export const signUp = async (regsitrationData) => {
    return await postRequest("/api/v1/users/register", regsitrationData);
}

export const login = async (loginData) => {
    return await postRequest("/api/v1/users/login", loginData);
}

export const logout = async (accessToken) => {
    return await postRequest("/api/v1/users/logout", {}, accessToken);
}