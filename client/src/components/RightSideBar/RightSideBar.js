import React , {useState, useEffect} from "react";
import './RightSideBar.css';
import Typography from "@material-ui/core/Typography";
import { useAlert } from "react-alert";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getQuestion } from "../../actions/questionActions";
// import Loader from "../Layout/Loader";

const Tags = [
    "General",
    "Engineering",
    "Technical",
    "Placement",
  ];

function RightsideBar(){
    const [tag, setTag] = useState("");

    const dispatch = useDispatch();

    const alert = useAlert();

    const {
      question,
      loading,
      error,
      questionsCount,
    } = useSelector((state) => state.questions);

    useEffect(() => {
      if (error) {
        alert.error(error);
        dispatch(clearErrors());
      }
  
      dispatch(getQuestion(tag));
    }, [dispatch, tag, alert, error]);
    
    return(
        <div className="rightsideBar">
          {/* <Typography>Tags</Typography> */}
            {/* <ul className="categoryBox">
              {Tags.map((tag) => (
                <li
                  className="category-link"
                  key={tag}
                  onClick={() => setTag(tag)}
                >
                  {tag}
                </li>
              ))}
            </ul> */}
        </div>
    );
    
}
export default RightsideBar;