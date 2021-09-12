import React from 'react';
import { Avatar, Input } from '@material-ui/core';
 import { ExpandMore} from '@material-ui/icons';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
// import React from 'react'
// import Modal from 'react-modal';


// //import QuestionModal from './QuestionModal';
// // import { useState } from 'react';


//  const AddQuestions= props => {
//     // const [openModal, setOpenModal] =  useState(false)
//     if(!props.show){
//         return null;
//     }
//     return (
//         <div>
//             <Modal>
//             <div className = " Modal_title">
//                 <h5>Add Question</h5>
//                 <div className = "Modal_info">
//                     <Avatar className = "avatar"/>
//                     <p>userName / user email id</p>
//                     <div className = "scope">
//                         <PeopleAltOutlinedIcon/>
//                         <p>Public</p>
//                         <ExpandMore/>
//                     </div>
//                 </div>
//                 <div className = "inputField">
//                     <Input type = "text" placeholder = "Type Your Question here..."/>
//                 </div>
//                 <div className="buttons">
//                 <button className="cancle" onClick ={props.onClose}>Close</button>
//                 <button type="submit" className="addQuestion">Add Question</button>
//                 </div>
               
//                 </div>    

//             </Modal>

//         </div>
//     )
// }

// export default AddQuestions

import { Button, Modal} from 'react-bootstrap';
import './AddQuestion.css';
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
            Add Question
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className = "Modal_info">
            <Avatar className = "avatar"/>
                     <p>userName/userEmail id</p>
                     <div className = "scope">
                         <PeopleAltIcon/>
                         <p>Public</p>
                         <ExpandMore/>
                     </div>
                     </div>
                     <div className = "inputField">
                     <Input type = "text" placeholder = "Type Your Question here..."/>
                     </div>
        </Modal.Body>
        <Modal.Footer className ="buttons">
          <Button className = "cancel" onClick={props.onHide}>Cancel</Button>
          <button type="submit" className="addQuestion">Add Question</button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default MyVerticallyCenteredModal;
