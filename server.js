const express = require("express");
const users = require("./api/routes/users");

const app = express();

require("dotenv").config();

const port = process.env.PORT || 4000;

app.use(express.json());

app.use("/api/users/", users);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message,
      status: err.status,
    },
  });
});

app.listen(port, () => console.log("Server listening on port " + port));
