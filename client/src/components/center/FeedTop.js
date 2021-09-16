import { Avatar } from "@material-ui/core";
import React from "react";
import "./FeedTop.css";

export default function FeedTop() {

  return (
    <div className="quoraBox">
      <div className="quoraBox__info">
        <Avatar />
        <h5 className="username-text">UserName</h5>
      </div>
      <div className="quoraBox__quora">
        <p className="question-link">What is your question or link?</p>
      </div>
    </div>
  );
}
