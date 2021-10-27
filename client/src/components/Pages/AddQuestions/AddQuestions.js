import React,{useState,  useEffect} from 'react';
import { Avatar, Input } from '@material-ui/core';
import { Button, Modal} from 'react-bootstrap';
import './AddQuestion.css';
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, createQuestion } from "../../././../actions/questionActions";
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";
import { NEW_QUESTION_RESET } from '../../../constants/questionConstants';
function QuestionModal(props) {
  let history = useHistory();
  const dispatch = useDispatch();
  const alert = useAlert();

  const { error, success, question } = useSelector((state) => state.newQuestion);

  const [tag, setTag] = useState("");
  const [questionDescription, setQuestionDescription] = useState("");

  const tags = [
    "General",
    "Engineering",
    "Technical",
    "Placement",
  ];


  const createQuestionSubmitHandler = () => {
    const myForm = new FormData();
    myForm.set("questionDescription", questionDescription);
    myForm.set("tag", tag);

    // images.forEach((image) => {
    //   myForm.append("images", image);
    // });
    dispatch(createQuestion(myForm));
    
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Question added Successfully");
      history.push("/");
      dispatch({ type: NEW_QUESTION_RESET });
    }
  }, [dispatch, alert, error, success]);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Question
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <div className = "Modal_info">
          <Avatar className = "avatar"/>
                   <p>{question.user}</p>
                   <div className = "scope">
                       <select onChange={(e) => setTag(e.target.value)}>
                <option value="">Choose Tag</option>
                {tags.map((cate) => (
                  <option key={cate} value={cate}>
                    {cate}
                  </option>
                ))}
              </select>
                   </div>
                   </div>
                   <div className = "inputField">
                   <Input type = "text"  onChange={(e) => setQuestionDescription(e.target.value)} placeholder = "Type Your Question here..."/>
                   </div>
      </Modal.Body>
      <Modal.Footer className ="buttons">
        <Button className = "cancel" onClick={props.onHide}>Cancel</Button>
        <button type="submit" onClick={createQuestionSubmitHandler} className="addQuestion">Add Question</button>
      </Modal.Footer>
    </Modal>
    );
  }

  export default QuestionModal;
