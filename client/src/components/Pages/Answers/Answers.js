import React from 'react';
import { Avatar, Input } from '@material-ui/core';
import { Button, Modal} from 'react-bootstrap';
// import './answer.css'
function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Question
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className = "Modal_info">
            <Avatar className = "avatar"/>
                     <p>asked by<span className = "name">username</span> {""} on <span className ="time">timestamp</span></p>
                     <div className = "Modal_answer">
                     <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">
                        Write your answer below:
                        </label>
                        <textarea className="form-control"id="exampleFormControlTextarea1"rows="5"/>
                        </div>
                     </div>
                     </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Cancel</Button>
          <button type="submit" className="addQuestion">Post Answer</button>
        </Modal.Footer>
      </Modal>
    );
  }
  export default MyVerticallyCenteredModal;  