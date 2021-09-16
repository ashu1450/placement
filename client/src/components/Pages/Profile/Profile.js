import { Avatar } from '@material-ui/core'
import React from 'react'
import './Profile.css'
import { Link } from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import MyProfile from './MyProfile';
import Setting from './Setting';
import LogOut from './LogOut';

  const routes = [
    {
      path: "/MyProfile",
      exact: true,
      main: () => <MyProfile/>

    },
    {
      path: "/Setting",
      main: () => <Setting/>
    },
    {
      path: "/LogOut",
      main: () => <LogOut/>
    }
  ];

function Profile() {
    return (
        <Router>
        <div className = "Profile">
            <div className = "body">
            <div className ="Heading">
            <Avatar style={{ height: '2.7vw', width: '2.7vw' }} />
            <Link style={{paddingLeft: 13, textDecoration: 'none'}} to="/MyProfile"><p className="text">My profile</p> </Link> 
            
            </div>
            <hr/>

              <div className="SideBarItem1">
                 <SettingsIcon className = "icon1"/>
                  <Link style={{paddingLeft: 13, textDecoration: 'none'}} to="/Setting"><p className="text">Setting</p></Link>
              </div><hr/>
              <div className="SideBarItem1">
                 <LibraryBooksIcon className = "icon1"/>
                  <Link style={{paddingLeft: 13, textDecoration: 'none'}} to="/"> <p className="text">Your Content</p></Link>
              </div><hr/>
              <div className="SideBarItem1">


                 <ExitToAppIcon className = "icon1"/>
                  <Link style={{paddingLeft: 13, textDecoration: 'none'}} to="/LogOut"><p className="text">Log Out</p></Link>
              </div>
              </div>
              <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.sidebar />}
              />
            ))}
          </Switch>

          <Switch>
            {routes.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
        </Router>
    )
}

export default Profile
