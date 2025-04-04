import { getRequest, postRequest, deleteRequest, putRequest } from "./api.js";

export const getAllTasks = async (accessToken) => {
    return await getRequest("/api/v1/users/getTasks", accessToken);
}

export const addNewTask = async (newEntry, accessToken) => {
    return await postRequest("/api/v1/users/addTask", newEntry, accessToken);
}

export const deleteATask = async (accessToken, taskId) => {
    return await deleteRequest("/api/v1/users/deleteATask", {}, accessToken, taskId);
}

export const updateATask = async (updateEntry, accessToken, taskId) => {
    return await putRequest("/api/v1/users/updateATask", updateEntry, accessToken, taskId);
}