const mongoose = require("mongoose");



const questionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
    questionDescription: {
        type: String,
        required: true,
        minLength: [8, "question description  should be at least 8 characters"],
    },
    tag: {
        type: String,
        default: "General",
    },
    questionImage: {
        questionImage_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },  
    createdAt: {
        type: Date,
        default: Date.now,
      },

});

module.exports = mongoose.model("Question",questionSchema);