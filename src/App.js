import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import {Provider} from "react-redux";
import store from "./Store/Store";

// page
import Home from "./Home";
import SignUp from "./SignUp";
import Reactt from "./Reactt";
import Contact from "./Contact";
import OnlineProduct from "./OnlineProduct/index";
import Cart from "./Cart/index";
import Food from "./Food/index";
import CartIcon from "./CartIcon/CartIcon"; 
import Paid from "./Paid";

class App extends Component {
  
  render() {
  return (

    <Router>
      <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark hidden-xs hidden-sm">
        <div className="container">
        <Link className="navbar-brand" to="/">HOW ?..</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact">Contact</Link>
            </li>
            <li className="nav-item">
            <Link to="/Food" className="nav-link">Courses</Link>
            </li>
            <li className="nav-item">
            <Link to="/Cart" className="nav-link">Cart</Link>
            </li>


          </ul>
          <Link to="/SignUp">
            <button className="btntnt btn btn-outline-info" style={{position: "relative", right:"74%", top: "2px"}} >Sign Up</button>
            </Link>

            <CartIcon />
        </div>
        </div>
      </nav>

        
      <Route path="/" component={Home} exact />
      <Route path="/SignUp" component={SignUp} exact />
      <Route path="/Reactt" component={Reactt} exact />
      <Route path="/Contact" component={Contact} exact />
      <Route path="/Cart" component={Cart} exact />
      <Route path="/Paid" component={Paid} exact />
      <Route path="/Food" component={Food} exact />
      <Route path="/Food/:id" component={OnlineProduct} exact />


    </Router>
   );
  }
}

function AppWithStore(){
  return <Provider store={store}>
    <App />
  </Provider>
}

export default AppWithStore;