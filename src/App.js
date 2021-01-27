import React, { Component } from 'react'
import {connect} from 'react-redux'
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import {Switch, Route,Link } from "react-router-dom";
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUpPage from "./pages/sign-in-and-signup/sign-in-and-signup";
import {auth,createUserProfileDocument} from './firebase/firebase.utils'
import {setCurrentUser} from './redux/user/user.action'

class App extends Component {


/* we wanna store the state of our user in our APP,when user loggs in we wanna store it in APP and pass it to Component */
  unsubscribeFromAuth = null
  /* auth=  firebase.auth() */ /* componentDidMount dlya 4ego shtoby uznat currentUser esli null to v Headere signIn bolady esli currentUser bar to sign out */
  componentDidMount(){ /* kogda login logout budet my hotim znat */
    const {setCurrentUser} = this.props
    /* auth.signOut() bolganda onAuthStateChanged boladi */
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=> { /* user degen object ishinde user.email bar emaio.displayName bar */
      if(userAuth){ /*userAuth degen zaloginen kogda signed in,kogda zaloginen my hotim v db zapisat(esli on predydushi ne zapisan) i setState sdelat */
        const userRef = await createUserProfileDocument(userAuth) /* userRef degen document {displayName,email} */
        /* check if our db has updated at that ref with any new data */
        userRef.onSnapshot(snapshot=> { /* userRef degen document {displayName,email}, snapshot degen object mozhno vitashit dannyie usera {displayName,email} i id */
           /*snapshot.data() degen object  createdAt: t {seconds: 1603131853, nanoseconds: 348000000}
displayName: "R-Line"
email: "areshil91@gmail.com"
__proto__: Object */
        setCurrentUser({id: snapshot.id,...snapshot.data()}) /* kogda regimsya to state set bolady */
        })
        
      } /* userAuth is null,if user signes out we still want to set currentUser to null */
      else{ /* esli user loggs out currentUser: null isteimyz */
        setCurrentUser(userAuth)
      }
      /* v bd zasosivaem user [21321: {displayName,email,createdAt}] */
       /* currentUser kerek shtoby button sign in ili sign out boldy, v header peredaem  */
        
      })

  }

  componentWillUnmount(){
    this.unsubscribeFromAut() /* close the subscription */
  }

  render(){
    return (
      <div>
        <Header />
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
