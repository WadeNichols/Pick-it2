const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const path = require("path");

//middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "client", "build")));

//routes
app.use("/api/tabs", require("./routes/tabs"));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://heroku_p47s5rhz:k9g2et38m2kl9cr1ti16gs2bfk@ds031581.mlab.com:31581/heroku_p47s5rhz"),
  // process.env.MONGODB_URI,
  { useNewUrlParser: true },
  () => console.log(`Connected to MongoDB`);
  
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

const port = process.env.PORT || 5000

app.listen(port, () =>
// app.listen(process.env.PORT, () =>
  console.log(`Listening on port ${process.env.PORT}`)
);
