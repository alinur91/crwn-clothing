import React, { Component } from 'react'

import './App.css';
import HomePage from './pages/homepage/homepage.component'
import {Switch, Route,Link } from "react-router-dom";
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUpPage from "./pages/sign-in-and-signup/sign-in-and-signup";
import {auth} from './firebase/firebase.utils'

class App extends Component {

constructor(){
  super()
    this.state={
    currentUser: null
  }
}

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth=  auth.onAuthStateChanged(user => {
       this.setState({ currentUser:user });
       
     })
  }

  componentWillUnmount(){
    this.unsubscribeFromAut()
  }

  render(){
    return (
      <div>
        <Header  currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  } 
}

export default App;
