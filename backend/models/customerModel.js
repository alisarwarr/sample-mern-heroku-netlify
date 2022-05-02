const mongoose = require("mongoose");

const customerSchema = mongoose.Schema(
  {
    name: { type: String, require },
    email: { type: String, require },
    address: { type: String, require },
    city: { type: String, require },
    state: { type: String, require },
    phone: { type: String, require },
    foods: [],
    deliveryCharges: { type: Boolean, require },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("customers", customerSchema);
