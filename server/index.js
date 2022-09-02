require("dotenv").config();
require("express-async-errors");

const express = require("express");
const errorHandlerMiddleware = require("./middleware/error");
const notFoundMiddleware = require("./middleware/notFound");
const colors = require("colors");
const app = express();
const port = process.env.PORT || 5000;
const router = require("./routes/routes");
// const connectDB = require("./config/db");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1", router);

app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);

const start = async () => {
  try {
    // await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server started on https://localhost:${port}`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
