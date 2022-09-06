require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
//const db = require("./configs/db");
const cors = require("cors");
const errors = require("./errors/commons");

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use((_, __, next) => {
    next(errors[404]);
  });

app.use(({ statusCode, error }, _, res, __) => {
    res.status(statusCode).json({
      success: false,
      message: error.message,
    });
  });

app.listen(process.env.PORT, () =>
  console.info(">El siguiente puerto esta on fire 🔥😜 :", process.env.PORT)
);
