import express from "express"
import cors from "cors"
import authRoutes from "./routes/authRoute.js"
//import taskRoutes from "./routes/taskRoute.js"

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("🚀 API de tareas corriendo correctamente")
})

app.use("/api/auth", authRoutes)
//app.use("/api/tasks", taskRoutes)

export default app
