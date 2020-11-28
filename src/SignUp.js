import React, { Component } from "react"
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Reactt from "./Reactt";
import "./App.css";
import Home from "./Home";

firebase.initializeApp({
    apiKey: "AIzaSyBmNl09LKQjZ6ZSyYDEqW1DcVIMot7BkrE",
    authDomain: "auth-app-35857.firebaseapp.com"
  })
  
class SignUp extends Component {
    state = { isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }
    render() {
    return (

        <div className="Apppp">
        {this.state.isSignedIn ? (
          <span>

            <div className="gdgjkdsn"> 
            <button onClick={() => firebase.auth().signOut()} className="btntnt btn btn-info" style={{position:"relative", right:"6%", top: "-58px", float:"right", clear:"both" }}>Sign out!</button>
            <h5 className="heading1">Welcome {firebase.auth().currentUser.displayName}</h5>
            <Home />

            </div>


          </span>
        ) : (
          
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />    
        )}
      </div>

     );
    }
  }
  
  export default SignUp;
  