const mongoose = require("mongoose");

const archiveSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    minLength: [8, "question description  should be at least 8 characters"],
  },

 numOfArchive: {
    type: Number,
    default: 0
},
 createdAt: {
    type: Date,
    default: Date.now,
  },

});

module.exports = mongoose.model("Archives", archiveSchema);