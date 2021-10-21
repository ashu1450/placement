import React, { Fragment } from 'react'
import Feed from '../../Center/Feed';
import MetaData from '../../Layout/MetaData';
import RightsideBar from '../../RightSideBar/RightSideBar';
import SideBar from '../../SideBar/SideBar';
 
import "./Home.css";

const question = {
    questionDescription: "what is what?",
    tag: "General",
    questionImages: [{url : "https://i.ibb.co/DRST11n/1.webp" }],
    _id: "kavya"
}

 const Home = () => {
    
    return (
       
        <Fragment>
        <MetaData title = "SonaSpace"/>
        <div className="homeContent">
         
         <SideBar/>
       
         <Feed  question = {question}/>
         
         <RightsideBar/>
         </div>
        </Fragment>
    )
}

export default Home;