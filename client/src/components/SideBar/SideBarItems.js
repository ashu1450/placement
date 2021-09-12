import React from 'react'
import { Link } from 'react-router-dom';
import './SideBarItems.css';
import {Nav} from "react-bootstrap"

function SideBarItems() {
    return (
        <div className="SideBarItems">
           <h4> Quick Checkout....</h4>
           <hr/>
            <div className="SideBarItem">
               
             <img src="placement history2.png" alt="" height="50" width="50"/>
              
             <Link style={{paddingLeft: 13, textDecoration: 'none'}} to="/"><p>Placement History</p> </Link> 
            </div> 
            <div className="SideBarItem">
                <img src="placement history1.jpg" alt=""  height="50" width="50"/>
                <Link style={{paddingLeft: 13, textDecoration: 'none'}} to="/"><p >Placement Cell</p></Link>
            </div>
            <div className="SideBarItem">
                <img src="college_curriculum.jpg" alt=""  height="50" width="50"/>
                <Link style={{paddingLeft: 13, textDecoration: 'none'}} to="/"> <p>College_Curriculum</p></Link>
            </div>
            <div className="SideBarItem">
                <img src="club2.png" alt=""  height="50" width="50"/>
                <Link style={{paddingLeft: 13, textDecoration: 'none'}} to="/"><p>Clubs</p></Link>
            </div>

             {/* <div class="sidenav">
               
                <Link href="/about">About</Link>
                <Link href="/services">Services</Link>
                <Link href="/clients">Clients</Link>
                <Link href="/contact">Contact</Link>
            </div>
             */}
        </div>
    )
}

export default SideBarItems;