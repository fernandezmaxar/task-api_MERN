import User from "../models/UserModel.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const register = async (req, res) => {
  try {
    const { username, password } = req.body

    // Verificar usuario existente
    const existingUser = await User.findOne({ username })
    if (existingUser) {
      return res.status(400).json({ message: "El usuario ya existe" })
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const user = new User({ username, password: hashedPassword })
    await user.save()

    res.status(201).json({ message: "Usuario registrado correctamente" })
  } catch (error) {
    console.error("Error en register:", error)
    res.status(500).json({ message: "Error al registrar usuario" })
  }
}

export const login = async (req, res) => {
  try {
    const { username, password } = req.body
    const user = await User.findOne({ username })

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Credenciales inválidas" })
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" })
    res.json({ token })
  } catch (error) {
    console.error("Error en login:", error)
    res.status(500).json({ message: "Error al iniciar sesión" })
  }
}
