const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/authController");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { CreateToken } = require("../services/tokens");

router.post("/register", async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: "Utilizador já registrado." });
    }

    user = new User({ email, password: bcrypt.hashSync(password, 8) });
    await user.save();

    res.status(201).json({ message: "Utilizador registrado com sucesso!" });
  } catch (err) {
    console.error("Erro no registro:", err);
    res.status(500).json({ error: "Erro no servidor." });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(404).json({ error: "Utilizador não encontrado." });
    }

    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Senha incorreta." });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    await CreateToken(user._id, token);
    res.json({ token });
  } catch (err) {
    console.error("Erro no login:", err); // Mostra o erro no terminal
    res.status(500).json({ error: "Erro no servidor." });
  }
});

module.exports = router;
