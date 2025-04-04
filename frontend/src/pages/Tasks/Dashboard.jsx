import { useEffect, useState } from "react";
import { addNewTask, getAllTasks, deleteATask, updateATask } from "../../services/taskService";
import Cookies from "js-cookie";
import { ApiError } from "../../utils/ApiError";
import { useNavigate, useLocation } from "react-router-dom";
import NavLogout from "../NavigationAfterLogin/NavLogout.jsx";

export default function Dashboard() {
    const [tasks, setTasks] = useState([]);
    const [newEntry, setNewEntry] = useState({
        title: "",
        description: "",
        dueDate: ""
    });
    const [editTaskId, setEditTaskId] = useState(null);
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const location = useLocation();
    const fullName = location.state?.fullName;

    const accessToken = Cookies.get("AccessToken");

    const getTasks = async () => {
        if (accessToken) {
            try {
                const response = await getAllTasks(accessToken);
                // if ( !response.ok ) {
                //     throw new ApiError(response.status, response.message)
                // }
                setTasks(response.data);
            } catch (error) {
                setError(error.message);
                setSuccessMessage("");
            }
        }
    };

    useEffect(() => {
        getTasks();
    }, [accessToken]);  // Depend on accessToken for changes

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewEntry((prevData) => ({ ...prevData, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccessMessage("");
        setError("");
        try {
            let response;
            if ( !editTaskId ) {
                response = await addNewTask(newEntry, accessToken);
                // console.log("New Entry added successfully!", response);
                setSuccessMessage(response.message);
                setError("");
            } else {
                response = await updateATask(newEntry, accessToken, editTaskId);
                // console.log("Task updated successfully!", response);
                setEditTaskId(null);
                setSuccessMessage(response.message);
                setError("");
            }
            setNewEntry({
                title: "",
                description: "",
                dueDate: ""
            });

            getTasks();
            
        } catch (error) {
            // console.error("Error adding/updating task:", error);
            setError(error.message);
            setSuccessMessage("");
        }
    }

    const updateGivenTask = async (task) => {
        setEditTaskId(task.taskId);
        setNewEntry({
            title: task.title,
            description: task.description,
            dueDate: task.dueDate ? task.dueDate.split('T')[0] : ""
        })
    }

    const deleteTask = async (taskId) => {
        setSuccessMessage("");
        setError("");
        try {
            const response = await deleteATask(accessToken, taskId)
            // console.log("Deleted successfully!", response);
            setSuccessMessage(response.message);
            setError("");
            getTasks();
        } catch (error) {
            // console.error("Error deleting task:", error);
            setError(error.message);
            setSuccessMessage("");
        }
    }

    const formatDate = (date) => {
        if (!date) return '';  // Return empty if no date
        const formattedDate = new Date(date);
        return formattedDate.toISOString().split('T')[0]; // Converts to YYYY-MM-DD format
    }

    return (
        <>
        <NavLogout />
        <div className="container">
            <h1>Welcome to To-Do Application!</h1>
            <h1>{fullName}</h1>

            <h3>Add New Task</h3>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="Title">Title: </label>
                        <input type="text" name="title" id="title" value={newEntry.title} onChange={handleInputChange} required/>
                        <br />

                        <label htmlFor="Description">Description: </label>
                        <input type="text" name="description" id="description" value={newEntry.description} onChange={handleInputChange} required/>
                        <br />

                        <label htmlFor="DueDate">DueDate: </label>
                        <input type="date" name="dueDate" id="dueDate" value={newEntry.dueDate} onChange={handleInputChange} required/>
                        <br />
                    </div>
                    <button type="submit">{ editTaskId ? "Update" : "Add" }</button>
                </form>
            </div>

            <h3>Tasks to complete</h3>
            <div>
                {
                    tasks.length > 0 ? (
                        tasks.map((task, index) => (
                            <div key={index} className="task-item">
                                <p>{task.title}</p>
                                <p>{task.description}</p>
                                <p>{formatDate(task.dueDate)}</p>
                                <button onClick={() => updateGivenTask(task)}>Edit</button>
                                <button onClick={() => deleteTask(task.taskId)}>Delete</button>
                            </div>
                        ))
                    ) : (
                        <div>No tasks available</div>
                    )
                }
            </div>
            {successMessage && (
                <div className="message success">
                    {successMessage}
                </div>
            )}
            {error && (
                <div className="message error">
                    {error}
                </div>
            )}
        </div>
        </>
    );
}
