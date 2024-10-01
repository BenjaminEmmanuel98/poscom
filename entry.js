// const express = require("express");
// const dotenv = require("dotenv").config();
// const connectDB = require("./Config/db");

// const app = express();
// connectDB();

// const PORT = process.env.PORT || 5000;
// let productInfo = [
//   { id: 1, title: "title 1", age: 75 },
//   {
//     id: 2,
//     title: "title 2",
//     age: 50,
//   },
//   {
//     id: 3,
//     title: "title 3",
//     age: 22,
//   },
// ];
// app.get("/", (req, res) => {
//   res.send("Hello Everyone");
// });
// app.get("/get", (req, res) => {
//   res.json(productInfo);
// });
// app.listen(PORT, () => console.log(`server running on port ${PORT}`));

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const connectDB = require("./Config/db");
const contentRoutes = require("./Routes/content");
const bodyParser = require("body-parser");
const app = express();
connectDB();

const ports = process.env.port || 5000;
app.use(cors());
app.use(bodyParser.json());
app.use("/content", contentRoutes);
app.listen(ports, () => console.log(`server running on port ${ports}`));
