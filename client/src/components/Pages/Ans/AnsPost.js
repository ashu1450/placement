import React from "react";
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import { MoreHorizOutlined, ShareOutlined } from "@material-ui/icons";
import "./AnsPost.css";
import AnswerModal from "../Answers/Answers";


function AnsPost() {
    const [answerShow, AnswerShow] = React.useState(false);
  return (
    <div className="AnsPost">
      <div className="title">
        <h4>Questions for you</h4>
      </div>
      <hr></hr>

      <div className="AnsBody">
        <div className="post__question">
          <p className="question-text">Here will be the question</p>
          <div className="middle">
          <span>No answer yet</span>
          <span> · </span>
          <span>Posted mintue ago</span>
          </div>

          <div className="post__footer">
            <div className="post__footerAction">
              <ArrowUpwardOutlinedIcon />
              <ArrowDownwardOutlinedIcon />
            </div>

            <button onClick={() => AnswerShow(true)} className="AnsButton" >Answer</button>
            <AnswerModal
            show={answerShow}
            onHide={() => AnswerShow(false)}

          />
            <div className="post__footerLeft">
              <ShareOutlined />
              <MoreHorizOutlined />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnsPost;
