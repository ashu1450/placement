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
  questionImage: [
    {
      questionImage_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  numOfAnswers: {
    type: Number,
    default: 0
},
answers: [
  {
   user: {
       type: mongoose.Schema.ObjectId,
       ref: "User",
       required: true,
   },
   name:{
       type: String,
       required: true
   },
   ans: {
       type: String,
       required: true
   },
//    rating: {
//     type: Number,
//     required: true
// },
  }
],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Question", questionSchema);
