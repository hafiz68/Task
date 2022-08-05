const express = require("express");
const app = express();
const cors = require("cors");

const sequelize = require("./config/config");
const User = require("./models/user")
const userRoutes = require("./routes/userRoutes");


app.use(cors());
app.use(express.json());

app.use("/api", userRoutes);
app.use("/", ( res) => {
    return res.send({ message: "Server is listening at localhost:5001" });
  });
  
  sequelize
    .sync()
    .then(() => {
      app.listen(
        5001,
        // app.listen(5000,
        () => {
          console.log("You are on port 5001");
        }
      );
    })
    .catch((err) => {
      console.log(err);
    });