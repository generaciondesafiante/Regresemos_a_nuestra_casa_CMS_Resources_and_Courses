const express = require("express");
const cors = require("cors");
const { dbConection } = require("./database/configMongoDB.JS");

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
  "Access-Control-Allow-Origin": "*",
};

require("dotenv").config();

//Create the express server
const app = express();
app.use(cors(corsOptions));

//database
dbConection();

//Public directory
app.use(express.static("public"));

//Read and parse the body
app.use(express.json());

//Routes
app.use("/api/course", require("./routes/courses"));

//listen requests
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
