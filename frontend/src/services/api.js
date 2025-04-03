import { ApiError } from "../utils/ApiError";

const API_URL = import.meta.env.VITE_API_URL;

export const getRequest = async ( endpoint, token = null ) => {
    try {
        // console.log(token);
        if ( token == null ) throw new Error("Unauthorized request!");
        const headers = { Authorization: `Bearer ${token}` };
        // console.log(`${API_URL}${endpoint}`)
        // console.log(headers);
        const response = await fetch( `${API_URL}${endpoint}`, { 
            method: "GET",
            headers
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Error: ${response.status} ${errorData.message || 'Unknown error'}`);
        }

        return await response.json();
    } catch (error) {
        console.error("GET Request Error:", error);
        throw error;
    }
};

export const postRequest = async ( endpoint, data = null, token = null, taskId = null ) => {
    try {
        const headers = { "Content-Type": "application/json" };
        if ( token ) headers["Authorization"] = `Bearer ${token}`;
        if ( taskId ) headers["taskid"] = taskId;
        
        // console.log(`${API_URL}${endpoint}`);
        // console.log(headers);
        const response = await fetch(`${API_URL}${endpoint}`, {
            method: "POST",
            headers,
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Error: ${response.status} ${errorData.message || 'Unknown error'}`);
        }

        // console.log(response)

        return await response.json();
    } catch (error) {
        console.error("POST Request Error:", error);
        throw error;
    }
};

export const deleteRequest = async ( endpoint, data = null, token = null, taskId = null ) => {
    try {
        const headers = { "Content-Type": "application/json" };
        if ( token ) headers["Authorization"] = `Bearer ${token}`;
        if ( taskId ) headers["taskid"] = taskId;
        
        // console.log(`${API_URL}${endpoint}`);
        // console.log(headers);
        const response = await fetch(`${API_URL}${endpoint}`, {
            method: "DELETE",
            headers,
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Error: ${response.status} ${errorData.message || 'Unknown error'}`);
        }

        return await response.json();
    } catch (error) {
        console.error("DELETE Request Error:", error);
        throw error;
    }
};

export const putRequest = async ( endpoint, data = null, token = null, taskId = null ) => {
    try {
        const headers = { "Content-Type": "application/json" };
        if ( token ) headers["Authorization"] = `Bearer ${token}`;
        if ( taskId ) headers["taskid"] = taskId;
        
        // console.log(`${API_URL}${endpoint}`);
        // console.log(headers);
        const response = await fetch(`${API_URL}${endpoint}`, {
            method: "PUT",
            headers,
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Error: ${response.status} ${errorData.message || 'Unknown error'}`);
        }

        return await response.json();
    } catch (error) {
        console.error("PUT Request Error:", error);
        throw error;
    }
};