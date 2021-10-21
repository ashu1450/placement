import React from "react";
import FeedTop from './FeedTop';
import Post from "./Post";
import "./Feed.css";




const Feed = ( ) => {
    return (
        <div className="feed">
        <FeedTop />
        <Post/>
        <Post />
        
        
        </div>
        );
}
export default Feed;