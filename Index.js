require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const errormiddleware = require("./Middlewares/errormiddleware");
const bodyParser = require("body-parser");
const PORT = process.env.PORT;
const Mongo_Url = process.env.MONGO_URL;
const authRoute = require("./Router/AuthRouter");
const GoalRouter = require("./Router/GoalRouter");

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//mongoDB connection
if (!Mongo_Url) {
  console.error("❌ ERROR: MONGO_URL is not defined in the .env file.");
  process.exit(1);
}
mongoose
  .connect(Mongo_Url)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

//route
app.use("/", authRoute);
app.use("/", GoalRouter);

//error handler
app.use(errormiddleware);
app.listen(PORT, () => {
  console.log("Server running on port 8000");
});

