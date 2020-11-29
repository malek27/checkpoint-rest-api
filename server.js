const express = require("express");
require("dotenv").config();
const dbconnect = require("./config/connectDB");
const contactRoutes = require("./routes/contacts");


const app = express();
app.use(express.json());
//DB connection
dbconnect();

// create route
app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT;
app.listen(PORT, (err) =>
  err ? console.error(err) : console.log("server is running..")
);
