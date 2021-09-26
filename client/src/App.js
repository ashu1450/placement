import React from 'react'
import './App.css';

// import SideBar from './components/SideBar/SideBar';

 import NavBar from './components/NavBar';
 import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
  import Home from './components/Pages/Home/Home';
  import Companies from './components/Pages/Companies/Companies';
 // import Archives from './components/pages/Archives/Archives';
  import Notification from './components/Pages/Notification/Notification';
  import Login from './components/Pages/Login/Login';
  import Profile from './components/Pages/Profile/Profile';
  import SearchBar from './components/Pages/SearchBar';
  import Ans from './components/Pages/Ans/Ans';
import Register from './components/Pages/Register/Register';
import ForgotPassword from './components/Pages/ForgotPassword/ForgotPassword';
import ResetPassword from './components/Pages/ResetPassword/ResetPassword';

//import PrivateRoute from './components/routing/PrivateRoute';
//import PrivateScreen from './components/Pages/PrivateScreen/PrivateScreen';
 
function App() {
  // const [progress, setProgress] = useState(0);
  return (
    <div className="App">
       <Router>
           <NavBar/>

             <Switch>
               {/* <Home exact path="/" component={Home}/> */}
                 <Route exact path="/home"><Home  /></Route>
                 <Route exact path="/companies"><Companies/></Route>
                 <Route exact path="/ans"><Ans/></Route>
                 <Route exact path="/notifications"><Notification/></Route>
                 <Route exact path="/search"><SearchBar/></Route>
                 <Route exact path="/login"><Login/></Route>
                 <Route exact path="/register"><Register/></Route>
                 <Route exact path="/forgotpassword"><ForgotPassword/></Route>
                 <Route exact path="/resetpassword/:resetToken"><ResetPassword/></Route>
                 <Route exact path="/profile"><Profile/></Route>
             </Switch>
       </Router>

    </div>
  );
}

export default App;
