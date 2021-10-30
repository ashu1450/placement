import React, { useEffect, Fragment } from "react";
import "./QuestionAnswerDetails.css";
import Post from "./Post";
import Ans from "./Ans";
import Loader from "../Layout/Loader/Loader";
import { clearErrors, getQuestionDetails } from "../../actions/questionActions";
import { useAlert } from "react-alert";
import MetaData from "../Layout/MetaData";
import { useDispatch, useSelector } from "react-redux";

const QuestionAnswerDetails = ({ match }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { question, loading, error } = useSelector(
    (state) => state.questionDetails
  );

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors);
    }
    dispatch(getQuestionDetails(match.params.id));
  }, [dispatch, match.params.id, error, alert]);

  return (
    <div className="answer-container">
    <Fragment>
      {loading ? ( <Loader />) : (
           <Fragment>
           <MetaData title={`${question._id} --SonaSpace`} />
           <Post question = {question} />
           <br/><br/>
           <h3>Answers: </h3>
           <br/>
           {question.answers && question.answers[0] ? (
             <div className="answers">
               {question.answers &&
                 question.answers.map((answer) => (
                   <Ans key={answer._id} answer={answer} />
                 ))}
             </div>
           ) : (
             <p className="noAnswer">No Answer Yet</p>
           )}
         </Fragment>
      )}
    
    </Fragment>
    </div>
  );
};

export default QuestionAnswerDetails;
