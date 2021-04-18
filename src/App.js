import React, { createContext, useEffect, useState } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/HomeMain/Home/Home';
import Login from "./Components/LoginMain/Login/Login";
import PrivateRoute from './Components/LoginMain/PrivateRoute/PrivateRoute';
import Booking from "./Components/BookingMain/Booking/Booking";
import Admin from "./Components/AdminMain/Admin/Admin";

export const userContext = createContext({});
export const serviceContext = createContext([]);

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [service, setService] = useState([]);

  useEffect(() => {
        fetch('https://afternoon-stream-14790.herokuapp.com/services')
        .then(res => res.json())
        .then(data => {
          setService(data);
        })
    }, [])
   
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <serviceContext.Provider value={[service, setService]}>
      <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/booking/:serviceId">
              <Booking />
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <Admin />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
      </Router>
      </serviceContext.Provider>
    </userContext.Provider>
  );
}

export default App;
