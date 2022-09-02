require("dotenv").config();
require("express-async-errors");

const express = require("express");
const errorHandlerMiddleware = require("./middleware/error");
const notFoundMiddleware = require("./middleware/notFound");
const app = express();
const port = process.env.PORT || 5000;
const router = require("./routes/routes");

app.use("/api/v1", router);

app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);

app.listen(port, () =>
  console.log(`Server started on https://localhost:${port}`)
);
