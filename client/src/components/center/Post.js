import { Avatar } from "@material-ui/core";
import React, { Fragment , useState} from "react";
import "./Post.css";
import AnswerModal from "../Pages/Answers/AnswerModal";
import { Link } from "react-router-dom";


const Post = ({ question }) => {
   const [answerShow, AnswerShow] = useState(false);
 
  return (
   <Fragment>
     <div className = "post" >
     
      <div className="post__info">
        <Avatar style={{ height: '2.7vw', width: '2.7vw' }} />
        <h4>name</h4>
        <p>{String(question.createdAt).substr(0, 10)}</p>
      </div>
      <div className="post__body">
      <Link className = "post" to={`/question/${question._id}`} >
          <p className="question-text">{question.questionDescription}</p>
          <small>{question.numOfAnswers} answer</small>
          </Link>
         

          <button onClick={() => AnswerShow(true)} className="post__btnAnswer">
            Answer
          </button>
          <AnswerModal
            show={answerShow}
            onHide={() => AnswerShow(false)}

          />

        </div>
        {/* {question.questionImage? } */}

        {/* <img src={question.questionImage[0].url } alt={question.questionImage._id} /> */}
        
       

      </div>
   </Fragment>
  );
}

export default Post;