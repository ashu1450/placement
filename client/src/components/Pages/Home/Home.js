import React, { Fragment } from 'react'
import Feed from '../../Center/Feed';
import MetaData from '../../Layout/MetaData';
import RightsideBar from '../../RightSideBar/RightSideBar';
import SideBar from '../../SideBar/SideBar';
 
import "./Home.css";



 const Home = () => {
    
    return (
       
        <Fragment>
        <MetaData title = "SonaSpace"/>
        <div className="homeContent">
         
         <SideBar/>
       
         <Feed />
         
         {/* <RightsideBar/> */}
         </div>
        </Fragment>
    )
}

export default Home;