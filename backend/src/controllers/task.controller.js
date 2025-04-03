import { Task } from "../models/task.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const createTask = asyncHandler( async (req, res) => {
    const { title, description, dueDate } = req.body;
    
    // console.log(req.user._id);
    const userId = req.user._id;

    if (!title || title.trim() === "") {
        throw new ApiError(400, "Title should not be empty!");
    }

    if (dueDate && isNaN(new Date(dueDate).getTime())) {
        throw new ApiError(400, "Invalid date format for dueDate");
    }

    if ( !title ) throw new ApiError(404, "Title should not be empty!");
    const task = await Task.create({
        userId,
        title,
        description,
        dueDate
    })

    const taskCreated = await Task.findById(task._id);

    if ( !taskCreated ) throw new ApiError(500, "Something went wrong while adding task. Try Again Later!");

    return res.status(201).json(
        new ApiResponse(200, taskCreated, "New task created successfully")
    )
})

const getTasks = asyncHandler( async (req, res) => {
    const userId = req.user._id;
    // console.log(userId);
    const tasks = await Task.find({ userId });
    // console.log(tasks);

    const resultTasks = tasks.map((task) => ({
        title: task.title,
        description: task.description,
        isCompleted: task.isCompleted,
        dueDate: task.dueDate,
        taskId: task._id
    }))

    // console.log(resultTasks);
    
    if ( !tasks ) {
        return res.status(201).json(
            new ApiResponse(200, tasks, "Currently no tasks available. Add New tasks!")
        )
    }
    return res.status(201).json(
        new ApiResponse(200, resultTasks, "All tasks are fetched properly.")
    )
})

const deleteTask = asyncHandler( async (req, res) => {

    const taskId = req.headers.taskid;
    const task = await Task.findById(taskId);
    // console.log(task);
    // console.log(taskId);

    if ( !task ) throw new ApiError(404, "Given task doesn't exist.");

    if ( req.user._id.toString() !== task.userId.toString() ) {
        throw new ApiError(403, "You are unauthorized to perform this operation!");
    }
    const delTask = await Task.deleteOne({ _id: taskId });
    if ( delTask.deletedCount !== 1 ) throw new ApiError(500, "Unable to perform delete operation.");

    return res.status(200).json(
        new ApiResponse(200, delTask, "Successfully deleted the task.")
    )

})

const updateTask = asyncHandler( async (req, res) => {

    const taskId = req.headers.taskid;
    const task = await Task.findById(taskId);
    // console.log(task);
    // console.log(taskId);

    const { title, description, dueDate } = req.body;

    if ( !task ) throw new ApiError(401, "Given task doesn't exist.");

    if ( req.user._id.toString() !== task.userId.toString() ) {
        throw new ApiError(403, "You are unauthorized to perform this operation!");
    }

    if (title && title.trim() === "") {
        throw new ApiError(400, "Title should not be empty!");
    }

    if (dueDate && isNaN(new Date(dueDate).getTime())) {
        throw new ApiError(400, "Invalid date format for dueDate");
    }

    const upTask = await Task.findByIdAndUpdate(
        taskId,
        {
            $set: {
                title: title,
                description: description,
                dueDate: dueDate
            }
        },
        {
            new: true
        }
    );

    if ( !upTask ) throw new ApiError(500, "Unable to perform update operation.");

    return res.status(200).json(
        new ApiResponse(200, upTask, "Successfully updated the task.")
    )

})

export {
    createTask,
    getTasks,
    deleteTask,
    updateTask
}