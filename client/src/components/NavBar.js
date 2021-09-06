import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
//import HomeIcon from '@material-ui/icons/Home';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import SearchIcon from '@material-ui/icons/Search';
//import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
//import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined";
import AssignmentTurnedInOutlinedIcon from "@material-ui/icons/AssignmentTurnedInOutlined"
import {Avatar} from '@material-ui/core';
import *as ReactBootStrap from "react-bootstrap";


export default function NavBar() {
    return (
        <>
        <div className="Header">
            <ReactBootStrap.Navbar sticky="top" collapseOnSelect expand="lg" bg="light">
                <ReactBootStrap.Container>
                <ReactBootStrap.Navbar.Brand href="#home">Sona_Space</ReactBootStrap.Navbar.Brand>
                <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                    <ReactBootStrap.Nav className="me-auto">
                    <ReactBootStrap.Nav.Link href="#home">Home</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link href="#companies">Companies</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.NavDropdown title="Categories" id="collasible-nav-dropdown">
                        <ReactBootStrap.NavDropdown.Item href="#placement">Placements</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Divider />
                        <ReactBootStrap.NavDropdown.Item href="#college_curriculum">College_Curriculum</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Divider />
                        <ReactBootStrap.NavDropdown.Item href="#clubs">Clubs</ReactBootStrap.NavDropdown.Item>
                    </ReactBootStrap.NavDropdown>
                    <ReactBootStrap.Nav.Link href="#Question"><button>Add Question</button></ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link href="#ans"><AssignmentTurnedInOutlinedIcon/></ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link href="#notification"><NotificationsOutlinedIcon/></ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link href="#search"> <ReactBootStrap.Form className="d-flex">
                    <ReactBootStrap.FormControl type="search" placeholder="Search" className="mr-2" aria-label="Search"/></ReactBootStrap.Form></ReactBootStrap.Nav.Link>
                    </ReactBootStrap.Nav>
                    <ReactBootStrap.Nav>
                    <ReactBootStrap.Nav.Link href="#login">Login</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link href="#profile"><Avatar/></ReactBootStrap.Nav.Link>
                    </ReactBootStrap.Nav>
                </ReactBootStrap.Navbar.Collapse>
                </ReactBootStrap.Container>
            </ReactBootStrap.Navbar>
            </div>
            
            {/* <div className="logo">
                <h2>
                    <span>S</span>ona
                    <span>S</span>pace
                </h2>
            </div>

            <div className="menu-link">
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">Companies</a>
                    </li>
                    <li>
                        <a href="/">Archives</a>
                    </li>
                    <li>
                        <a href="/"><NotificationsOutlinedIcon/></a>
                    </li>
                    <li>
                        <SearchIcon/>
                        <input type="text" placeholder="Search"/>
                    </li>
                </ul>
            </div>
            <div className="icons">
                <ul>
                    <li>
                        <a href="/"><button>Add Question</button></a>
                    </li>
                    <li>
                        <a href="/"><button>Answers</button></a>
                    </li>
                    <li>
                        <a href="/"><Avatar/></a>
                    </li>
                    <li>
                        <a href="/">Login</a>
                    </li>
                </ul>
            </div>
            
        </nav> 
        <section className="section">
            <p>Welcome to</p>
            <h1>SonaSpace</h1>
        </section> */}
        </>   
    )
}
