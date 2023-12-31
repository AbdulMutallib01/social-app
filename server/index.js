const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require("./models");
const postRouter = require("./routes/Posts");
const cors = require("cors");

// build-in-middleware
app.use(bodyParser.json());
app.use(cors());

// routes
app.use("/posts", postRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running at 3001");
  });
});
