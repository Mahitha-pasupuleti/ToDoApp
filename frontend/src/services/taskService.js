import { getRequest, postRequest, deleteRequest, putRequest } from "./api.js";

export const getAllTasks = async (accessToken) => {
    return await getRequest("/getTasks", accessToken);
}

export const addNewTask = async (newEntry, accessToken) => {
    return await postRequest("/addTask", newEntry, accessToken);
}

export const deleteATask = async (accessToken, taskId) => {
    return await deleteRequest("/deleteATask", {}, accessToken, taskId);
}

export const updateATask = async (updateEntry, accessToken, taskId) => {
    return await putRequest("/updateATask", updateEntry, accessToken, taskId);
}