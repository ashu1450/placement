import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css";
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import { MoreHorizOutlined, ShareOutlined } from "@material-ui/icons";
import AnswerModal from "../Pages/Answers/Answers";

function Post() {
  const [answerShow, AnswerShow] = React.useState(false);
  return (
    <div className="post">
      <div className="post__info">
        <Avatar style={{ height: '2.7vw', width: '2.7vw' }} />
        <h4>username</h4>
        <small>Date with Time</small>
      </div>
      <div className="post__body">
        <div className="post__question">
          <p className="question-text">Here will be the question</p>
          <button onClick={() => AnswerShow(true)} className="post__btnAnswer">
            Answer
          </button>
          <AnswerModal
            show={answerShow}
            onHide={() => AnswerShow(false)}

          />

        </div>
        <div className="post__answer">

        </div>
        <img src="" alt="" />

      </div>
      <div className="post__footer">
        <div className="post__footerAction">
          <ArrowUpwardOutlinedIcon />
          <ArrowDownwardOutlinedIcon />
        </div>

        <RepeatOutlinedIcon />
        <ChatBubbleOutlineOutlinedIcon />
        <div className="post__footerLeft">
          <ShareOutlined />
          <MoreHorizOutlined />
        </div>
      </div>
    </div>
  );
}

export default Post;