import React from 'react'
import './App.css';

// import SideBar from './components/SideBar/SideBar';

 import NavBar from './components/NavBar';
 import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
  import Home from './components/Pages/Home/Home';
  import Companies from './components/Pages/Companies/Companies';
 // import Archives from './components/pages/Archives/Archives';
  import AddQuestions from './components/Pages/AddQuestions/AddQuestions';
  import Answers from './components/Pages/Answers/Answers';
  import Notification from './components/Pages/Notification/Notification';
  import Login from './components/Pages/Login/Login';
  import Profile from './components/Pages/Profile/Profile';
  import SearchBar from './components/Pages/SearchBar';
 // import {useState} from 'react';
 
function App() {
  // const [progress, setProgress] = useState(0);
  return (
    <div className="App">
       <Router>
           <NavBar/>
           {/* <LoadingBar
           height = {3}
           color='#f11946'
           progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      /> */}
             <Switch>
                 <Route path="/home"><Home  /></Route>
                 <Route exact path="/companies"><Companies/></Route>
                 {/* <Route exact path="/archives"><Archives/></Route> */}
                 {/* <Route exact path="/Question"><AddQuestions/></Route> */}
                 <Route exact path="/ans"><Answers/></Route>
                 <Route exact path="/notifications"><Notification/></Route>
                 <Route exact path="/search"><SearchBar/></Route>
                 <Route exact path="/login"><Login/></Route>
                 <Route exact path="/profile"><Profile/></Route>
             </Switch>
       </Router>
       {/* <div className="sidebar">
         <SideBar/>
       </div> */}

    </div>
  );
}

export default App;
