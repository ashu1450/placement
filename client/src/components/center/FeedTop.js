import { Avatar } from "@material-ui/core";
import React from "react";
import "./FeedTop.css";

export default function FeedTop() {

  return (
    <div className="quoraBox">
      <div className="quoraBox__info">
        <Avatar />
        <h5>UserName</h5>
      </div>
      <div className="quoraBox__quora">
        <p>What is your question or link?</p>
      </div>
    </div>
  );
}