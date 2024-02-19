const express = require("express");
const shakeDatabase = require("./connection/database");
//
require("dotenv").config();

const app = express();

const { PORT } = process.env;

app.use(express.json());

app.use("/api/v1/pets", require("./routes/pet.route"));

app.get("/", async (req, res) => {
  res.status(200).json({ message: "Welcome to our amazing pet store" });
});
// SHAKE DATABASE
shakeDatabase(() => {
  // Start the server after database successful handshake
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
