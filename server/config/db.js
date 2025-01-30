const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "calendarioDB",
    });
    console.log("MongoDB conectado com sucesso.");
  } catch (err) {
    console.error("Erro ao conectar ao MongoDB:", err.message);
    process.exit(1); // Sai da aplicação em caso de erro
  }
};

module.exports = connectDB;
