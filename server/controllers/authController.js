const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { CreateToken } = require("../services/tokens");
const User = require("../models/User");

exports.register = async (req, res) => {
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
    res.status(500).json({ error: "Erro no servidor." });
  }
};

const authenticateToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(401).json({ error: "Token ausente." });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: "Token inválido." });
    req.user = user; // Adiciona o usuário no request
    next();
  });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
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
    console.log(err);
    res.status(500).json({ error: "Erro no servidor." });
  }
};

module.exports = authenticateToken;
