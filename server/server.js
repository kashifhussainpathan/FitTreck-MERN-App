require("./db");

const dotenv = require("dotenv");
const express = require("express");
dotenv.config({ path: "./config.env" });

const authRouter = require("./routes/auth.routes");
const foodRouter = require("./routes/food.routes");
const goalsRouter = require("./routes/goals.routes");
const exerciseRouter = require("./routes/exercise.routes");

const app = express();
const cors = require("cors");

// middleware
const corsOptions = {
  origin: "https://fit-treck-mern-app.vercel.app",
};
app.use(express.json());
app.use(cors(corsOptions));

app.use("/", authRouter);
app.use("/goals", goalsRouter);
app.use("/foods", foodRouter);
app.use("/exercises", exerciseRouter);

// route
app.get("/", (req, res) => {
  res.status(201).json({ message: "Connected to Backend!" });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`App is Listening on PORT ${PORT}`);
});
