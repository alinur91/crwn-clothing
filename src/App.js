import React, { Component } from 'react'
import {connect} from 'react-redux'
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import {Switch, Route,Link } from "react-router-dom";
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUpPage from "./pages/sign-in-and-signup/sign-in-and-signup";
import {auth,createUserProfileDocument} from './firebase/firebase.utils'
import {setCurrentUser} from './redux/user/user.actions'

class App extends Component {

  state={currentUser: null}

/* we wanna store the state of our user in our APP,when user loggs in we wanna store it in APP and pass it to Component */
  unsubscribeFromAuth = null
  
  componentDidMount(){ /* kogda login logout budet my hotim znat */
    this.unsubscribeFromAuth=auth.onAuthStateChanged(user=> { /* user degen object ishinde user.email bar emaio.displayName bar */
      console.log(user)
        this.setState({currentUser: user})
      })

    // const {setCurrentUser} = this.props

    // this.unsubscribeFromAuth=  auth.onAuthStateChanged(async userAuth => {
    //   //  this.setState({ currentUser:user });
    //    if(userAuth){
    //       const userRef = await createUserProfileDocument(userAuth)
 
    //       userRef.onSnapshot(snapshot => {
    //          setCurrentUser ({
    //              id: snapshot.id,
    //              ...snapshot.data()
    //            })
    //          })
          
    //    }else{
    //      setCurrentUser(userAuth)
    //    }
       
    //  })
  }

  componentWillUnmount(){
    this.unsubscribeFromAut() /* close the subscription */
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


const mapDispatchToProps = dispatch => ({
setCurrentUser : user => dispatch(setCurrentUser(user))
})

export default connect(null,mapDispatchToProps)(App);
