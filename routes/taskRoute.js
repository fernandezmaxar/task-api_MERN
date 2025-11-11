import express from "express"
import { getTasks, createTask, updateTask, deleteTask } from "../controllers/taskController.js"
import authenticate from "../middleware/authMiddleware.js"
import validateObjectIdMiddleware from "../middleware/validateObjectIdMiddleware.js"

const router = express.Router()

router.use(authenticate)

router.get("/", getTasks)
router.post("/", createTask)
router.put("/:id", validateObjectIdMiddleware, updateTask)
router.delete("/:id", validateObjectIdMiddleware, deleteTask)

export default router
