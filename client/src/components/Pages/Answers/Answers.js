import React from 'react';
import { Avatar, Input } from '@material-ui/core';
import { Button, Modal} from 'react-bootstrap';
 import './answer.css'
function AnswerModal(props) {
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
          <Avatar className = "avatar1"/>
                   <p className ="line">asked by<span className = "name">username</span> {""} on <span className ="time">timestamp</span></p>
                   <div className = "Modal_answer">
                   <div className="form-group">
                      <label htmlFor="Textarea">
                      Write your answer below:
                      </label>
                      <textarea className="form-control" id="Textarea" rows="3" />
                  </div>
                   </div>
                   </div>
      </Modal.Body>
      <Modal.Footer className = "buttons">
        <Button onClick={props.onHide} className = "cancel">Cancel</Button>
        <button type="submit" className="postAnswer">Post Answer</button>
      </Modal.Footer>
    </Modal>
    );
  }
  export default AnswerModal;  