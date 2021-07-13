const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

//establishes port
const PORT = process.env.PORT || 3000;


const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));

app.use(express.static("public"));

//connects to mongoose database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// require routes
app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));



app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
