import React from 'react'
import Feed from '../../center/Feed';
import RightsideBar from '../../RightSideBar/RightSideBar';
import SideBar from '../../SideBar/SideBar';
import "./Home.css";

 //import { useState, useEffect } from "react";
// import axios from "axios";




 const Home = () => {
    // const [error, setError] = useState("");
    // const [privateData, setPrivateData] = useState("");
  
    // useEffect(() => {
    //   const fetchPrivateDate = async () => {
    //     const config = {
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    //       },
    //     };
  
    //     try {
    //       const { data } = await axios.get("/api/private", config);
    //       setPrivateData(data.data);
    //     } catch (error) {
    //       localStorage.removeItem("authToken");
    //       setError("You are not authorized please login");
    //     }
    //   };
  
    //   fetchPrivateDate();
    // }, []);
    return (
        // error ? <span className="error-message">{error}</span> :
        <>
        <div className="homeContent">
         
         <SideBar/>
         <Feed />
         <RightsideBar/>
         {/* {privateData}</div> */}
         </div>
        </>
    )
}

export default Home;