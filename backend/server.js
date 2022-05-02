const express = require("express");
const dotenv = require("dotenv").config();

const Meal = require("./models/mealModel");

const app = express();
const db = require("./db.js");
app.use(express.json());
const path = require("path");
const mealsRoute = require("./routes/mealsRoute");
const userRoute = require("./routes/userRoute");
const ordersRoute = require("./routes/ordersRoute");
const customersRoute = require("./routes/customersRoute");

// ADD THIS
var cors = require('cors');
app.use(cors());

app.use("/api/meals/", mealsRoute);
app.use("/api/users/", userRoute);
app.use("/api/orders/", ordersRoute);
app.use("/api/customers/", customersRoute);

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client/build/index.html"));
  });
}

const port = process.env.PORT || 8000;

app.listen(port, () => `Server running on port port 🔥`);
