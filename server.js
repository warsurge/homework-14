const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = process.env.PORT || 8080;

const db = require("./models");

const app = express();
app.use(compression());

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://warsurge:pimp15@ds255857.mlab.com:55857/heroku_ssg54hm5", { useNewUrlParser: true });


require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });