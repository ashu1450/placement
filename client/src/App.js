import React from "react";
import "./App.css";
import webFont from "webfontloader";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router,  Route } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import Companies from "./components/Pages/Companies/Companies";
import LoginSignUp from "./components/Pages/User/LoginSignUp";
import Profile from "./components/Pages/User/Profile";
import ForgotPassword from "./components/Pages/User/ForgotPassword";
import ResetPassword from "./components/Pages/User/ResetPassword";
import UpdateProfile from "./components/Pages/User/UpdateProfile";
import UpdatePassword from "./components/Pages/User/UpdatePassword";
import store from "./store";
import { loadUser } from "./actions/userAction";
import { useSelector } from "react-redux";
import UserOptions from "./components/UserOptions/UserOptions";
import ProtectedRoute from "./components/Route/ProtectedRoute";
import QuestionAnswerDetails from "./components/Center/QuestionAnswerDetails";
import Archives from "./components/Pages/Archives/Archives";


function App() {

  const { isAuthenticated, user } = useSelector((state) => state.user);

  React.useEffect(() => {
    webFont.load({
      google:{
        families:["Roboto","Droid Sans","Chilanka"]
      }
    })

    store.dispatch(loadUser());      // user lina lai /me wala , state ma data rahnxa jaile aaba 

  },[]);
 
  return (
    <div className="App">
      <Router>
        <NavBar />

       
        {isAuthenticated && <UserOptions user={user} />}
       
        <Route exact path="/" component={Home} />

        <Route exact path="/question/:id" component={QuestionAnswerDetails} />
      
        <Route exact path="/companies" component={Companies} />
        <Route exact path="/archives" component={Archives} />
        <Route exact path="/account" component={Profile} />
        <Route exact path="/login" component={LoginSignUp} />

        <ProtectedRoute exact path="/account" component={Profile} />

        <Route exact path="/password/forgot" component={ForgotPassword} />
        <Route exact path="/password/reset/:token" component={ResetPassword} />

        <ProtectedRoute exact path="/me/update" component={UpdateProfile} />
        <ProtectedRoute exact path="/password/update" component={UpdatePassword} />
      </Router>
    </div>
  );
}

export default App;
