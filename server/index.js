const express = require("express");
// const cors = require("cors");
const dbConfig = require("./config/config");

// const port = 8080;
const port = process.env.PORT || 5000;
const app = express();
const carsDbRoutes = require("./routes/carsRoutes");
// app.use(cors());
app.use(express.json());
app.use("/api/cars", carsDbRoutes);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
