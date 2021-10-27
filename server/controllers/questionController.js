const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Question = require("../models/questionModel");
const ApiFeatures = require("../utils/apifeatures");


// Creat question 
exports.addQuestion = catchAsyncErrors(async (req, res, next) => {

  
    const { questionDescription, tag} = req.body;
    const question = await Question.create({
        user: req.user._id,
        questionDescription,
        tag,
        questionImage: {
          questionImage_id: "This is sample qestion image",
          url: "This is sample url",
        },
      });
      
      //const saveQuestion = await question.save();
      res.status(200).json({
        success: true,
        question,
    })
  
  });




// // Get User question
exports.getUserQuestion = catchAsyncErrors(async (req, res, next) => {
    const question = await Question.find({ user: req.user._id });

    if(!question){
        return next(new ErrorHandler("question not found",404));
    }
  
    res.status(200).json({
      success: true,
      question,
    });
  });

// delete question
exports.deleteQuestion = catchAsyncErrors(async(req,res,next) => {
    const question = await Question.findById(req.params.id);

    if(!question){
        return next(new ErrorHandler("Question  not found",404));
    }

    await question.remove();

    res.status(200).json({
        success: true,
        message: "Question deleted"
    });

});  

// get question details
exports.getQuestionDetails = catchAsyncErrors(async(req,res,next) => {
  const question = await Question.findById(req.params.id);

  if(!question){
      return next(new ErrorHandler("Question  not found",404));
  }



  res.status(200).json({
      success: true,
      question
  });

}); 

// update question 
exports.updateQuestion = catchAsyncErrors(async(req,res,next) => {
    let question = await Question.findById(req.params.id);

    if(!question){
        return next(new ErrorHandler("Question not found",404));
    }

    question = await Question.findByIdAndUpdate(req.params.id,req.body, {
        new:true,
        runValidators:true,
        useFindAndModify:false
    });

    res.status(200).json({
        success: true,
        question
    });
});

// get all questions -
exports.getAllQuestions = catchAsyncErrors(async (req, res, next) => {
   
    const questionsCount = await Question.countDocuments();
    const apiFeatures = new ApiFeatures(Question.find(),req.query)
    .search()
    .filter();


    let questions = await apiFeatures.query;
    
  
    res.status(200).json({
      success: true,
      questionsCount,
      questions,
    });
  });


// Add New answer 
exports.addAnswer = catchAsyncErrors(async (req, res, next) => {
  const { rating, ans, questionId } = req.body;

  const answer = {
    user: req.user._id,
    name: req.user.name,
   // rating: Number(rating),
    ans,
  };

  const question = await Question.findById(questionId);
    question.answers.push(answer);
    question.numOfAnswers = question.answers.length;
  

   await question.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
    answer
  });
}); 

  // Get All Answers of a question
  exports.getAllAnswers = catchAsyncErrors(async (req, res, next) => {
    const question = await Question.findById(req.query.id);
  
    if (!question) {
      return next(new ErrorHandler("Qustion not found", 404));
    }
  
    res.status(200).json({
      success: true,
      answers: question.answers,
    });
  });




   // Delete Review
exports.deleteAnswer = catchAsyncErrors(async (req, res, next) => {
  const question = await Question.findById(req.query.questionId);

  if (!question) {
    return next(new ErrorHandler("Question not found", 404));
  }

  const answers = question.answers.filter(
    (rev) => rev._id.toString() !== req.query.id.toString()
  );

  const numOfAnswers = answers.length;

  await Question.findByIdAndUpdate(
    req.query.questionId,
    {
      answers,
      numOfAnswers,
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
  });
}); 
