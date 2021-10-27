const express  = require("express");
const { getUserQuestion, addQuestion, deleteQuestion, updateQuestion, getAllQuestions, addAnswer, getAllAnswers, deleteAnswer, getQuestionDetails } = require("../controllers/questionController");
const {isAuthenticatedUser, authorizeRoles} = require("../middleware/auth");


const router = express.Router();

router.route("/my/questions").get(isAuthenticatedUser, getUserQuestion);
router.route("/add/question").post(isAuthenticatedUser, addQuestion);
router.route("/question/:id").put(isAuthenticatedUser, updateQuestion)
.delete(isAuthenticatedUser, deleteQuestion);

router.route("/questions").get( getAllQuestions);
router.route("/question/:id").get(getQuestionDetails);

router.route("/add/answer").post(isAuthenticatedUser , addAnswer);
router.route("/answers").get(getAllAnswers).delete(isAuthenticatedUser, deleteAnswer);




module.exports = router;