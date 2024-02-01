const express = require("express");
const app = express();
const morgan = require("morgan");
const BodyParser = require("body-parser");
const db = require("./config/db.js");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http").createServer(app);
app.use(BodyParser.urlencoded({ extended: false }));
app.use(BodyParser.json());
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
(async () => {
  await db.connect();
})();
http.listen(3000, () => console.log(`Listening on port 3000`));
