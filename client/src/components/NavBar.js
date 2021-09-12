import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import SearchIcon from '@material-ui/icons/Search';
//import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined";
import AssignmentTurnedInOutlinedIcon from "@material-ui/icons/AssignmentTurnedInOutlined"
import {Avatar,TextField} from '@material-ui/core';
import *as ReactBootStrap from "react-bootstrap";
 //import { Link } from 'react-bootstrap';
import styles from './NavBar.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Modal from 'react-modal';
import RightsideBar from './RightSideBar/RightSideBar';
//import AddQuestions from './Pages/AddQuestions/AddQuestions';
import MyVerticallyCenteredModal from './Pages/AddQuestions/AddQuestions';

export default function NavBar() {

    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <div className="Header">
               <ReactBootStrap.Navbar sticky="top" collapseOnSelect expand="lg" className="Head"
                activeKey="/home"
               // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
               >
                    <ReactBootStrap.Container>
                        <ReactBootStrap.Navbar.Brand to="/home" className="logo">Sona_Space</ReactBootStrap.Navbar.Brand>
                        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                            <ReactBootStrap.Nav className="me-auto">
                                <ReactBootStrap.Nav defaultActiveKey="/home">
                                    <ReactBootStrap.Nav.Link as={Link} to="/home" className="comp" eventKey="/home" ><HomeIcon fontSize="small"/>Home</ReactBootStrap.Nav.Link>
                                    <ReactBootStrap.Nav.Link as={Link} to="/companies" className="comp" eventKey="link-2">Companies</ReactBootStrap.Nav.Link>
                                    <ReactBootStrap.Nav.Link as={Link} to="/archives" className="comp" eventKey="link-3">Archives</ReactBootStrap.Nav.Link>


                                    <ReactBootStrap.Nav.Link as={Link} to="/ans" className="icon" eventKey="link-4"><AssignmentTurnedInOutlinedIcon /></ReactBootStrap.Nav.Link>
                                    <ReactBootStrap.Nav.Link as={Link} to="/notifications" className="icon" eventKey="link-5"><NotificationsOutlinedIcon /></ReactBootStrap.Nav.Link>
                                    <ReactBootStrap.Nav.Link as={Link} to="/search" className="searchBar">
                                        <ReactBootStrap.InputGroup className="mb-2">
                                            <ReactBootStrap.InputGroup.Text><SearchIcon /></ReactBootStrap.InputGroup.Text>
                                            <ReactBootStrap.FormControl id="inlineFormInputGroup" placeholder="Search" />
                                        </ReactBootStrap.InputGroup>
                                    </ReactBootStrap.Nav.Link>
                                    </ReactBootStrap.Nav>
                                    </ReactBootStrap.Nav>
                                    <ReactBootStrap.Nav>
                                    <ReactBootStrap.Nav.Link as={Link} to="/Question"><button onClick={() => setModalShow(true)} >Add Question</button>
                                    <MyVerticallyCenteredModal
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                />


                                    
                                    </ReactBootStrap.Nav.Link>
                                    <ReactBootStrap.Nav.Link as={Link} to="/login"  className="login" >Login</ReactBootStrap.Nav.Link>
                                    <ReactBootStrap.Nav.Link as={Link} to="/profile" className="avatar"><Avatar /></ReactBootStrap.Nav.Link>
                                
                            </ReactBootStrap.Nav>
                        </ReactBootStrap.Navbar.Collapse>
                    </ReactBootStrap.Container>
                </ReactBootStrap.Navbar>
            </div>
            
        </>   
    )
}
