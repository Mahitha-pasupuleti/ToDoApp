import { getRequest, postRequest } from "./api.js";

export const signUp = async (regsitrationData) => {
    return await postRequest("/register", regsitrationData);
}

export const login = async (loginData) => {
    return await postRequest("/login", loginData);
}

export const logout = async (accessToken) => {
    return await postRequest("/logout", {}, accessToken);
}