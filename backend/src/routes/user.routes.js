import { Router } from "express";
import { loginUser, logoutUser, refreshAccessToken, registerUser } from "../controllers/user.controller.js";
import { createTask, deleteTask, getTasks, updateTask } from "../controllers/task.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(registerUser)

router.route("/login").post(loginUser)

// secured routes
router.route("/logout").post(verifyJWT, logoutUser)
router.route("/refreshAccessToken").post(refreshAccessToken)

// task creation routes
router.route("/addTask").post(verifyJWT, createTask)
router.route("/getTasks").get(verifyJWT, getTasks)
router.route("/deleteATask").delete(verifyJWT, deleteTask)
router.route("/updateATask").put(verifyJWT, updateTask)

export default router