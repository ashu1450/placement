import React, { Fragment, useEffect,useState } from "react";
import FeedTop from "./FeedTop";
import Post from "./Post";
import "./Feed.css";
import { getQuestion, clearErrors } from "../../actions/questionActions";
import { useSelector, useDispatch } from "react-redux";
 import Loader from "../Layout/Loader/Loader";
import { useAlert } from "react-alert";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import LocalOfferIcon from '@material-ui/icons/LocalOffer';



const Tags = [
  "General",
  "Engineering",
  "Technical",
  "Placement",
];

const Feed = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const [tag, setTag] = useState("");

  const { loading, error, questions } = useSelector((state) => state.questions);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors);
    }
    dispatch(getQuestion(tag));
  }, [dispatch,tag,error,alert]);

  
  return (
    <Fragment>
       {loading ? ( <Loader/> ) : (
          <Fragment>
          <div className="feed">
            <FeedTop />
            {questions && questions.map(question => (
                    <Post question={question} />
                ))}
          </div>

          <div className="rightsideBar">
          <Typography className="tags" >Tags</Typography>

          
             <ul className="container1">
              {Tags.map((tag) => (
                <div className='link'>
                <div
                  className="text"
                  key={tag}
                  onClick={() => setTag(tag)}
                >
                <LocalOfferIcon />
                  {tag}
                  </div>
                  </div>
              ))}
            </ul> 
        </div>
        </Fragment>
       )}
    </Fragment>
   
  );
};
export default Feed;
