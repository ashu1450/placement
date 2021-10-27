import React from "react";
import profilePng from "../../images/Profile.png"
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import { MoreHorizOutlined, ShareOutlined } from "@material-ui/icons";

const Ans = ({ answer }) => {
  return (
    <div className="ans">
      <img src={profilePng} style={{ height: '2.7vw', width: '2.7vw' }} alt="User" />
      <p>{answer.name}</p>
      <p className="answer-text">{answer.ans}</p>
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
};

export default Ans;
