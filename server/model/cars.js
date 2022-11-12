

const mongoose = require("mongoose");

const carsSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
  },
  {
    timeStampes: true,
  }
);
const carsModel = mongoose.model("cars", carsSchema);
module.exports = carsModel;
