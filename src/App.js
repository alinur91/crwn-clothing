import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import {Switch, Route,Redirect } from "react-router-dom";
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUpPage from "./pages/sign-in-and-signup/sign-in-and-signup";
import {auth,createUserProfileDocument} from './firebase/firebase.utils'
import {selectCurrentUser} from './redux/user/user.selectors'

import CheckoutPage from './pages/checkout/checkout.component'
import {checkUserSession} from './redux/user/user.action'

import {createStructuredSelector} from 'reselect'


const App =({checkUserSession,currentUser})=> {

/* we wanna store the state of our user in our APP,when user loggs in we wanna store it in APP and pass it to Component */
 const unsubscribeFromAuth = null
  /* auth=  firebase.auth() */ /* componentDidMount dlya 4ego shtoby uznat currentUser esli null to v Headere signIn bolady esli currentUser bar to sign out */
  /* componentDidMount runs everytime we refresh the page */
  useEffect(()=>checkUserSession(),[checkUserSession])
    
    /* kogda login logout budet my hotim znat */
    /* auth.signOut() bolganda onAuthStateChanged boladi */
//     this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=> { /* user degen object ishinde user.email bar emaio.displayName bar */
//       if(userAuth){ /*userAuth degen zaloginen kogda signed in,kogda zaloginen my hotim v db zapisat(esli on predydushi ne zapisan) i setState sdelat */
//         const userRef = await createUserProfileDocument(userAuth) /* userRef degen document {displayName,email} */
//         /* check if our db has updated at that ref with any new data. const snapshot =await userRef.get()*/
//         userRef.onSnapshot(snapshot=> { /*onSnapshot degen whenever we updated set a new value update or delete value we get that snapshot. userRef degen document {displayName,email}, snapshot degen object mozhno vitashit dannyie usera {displayName,email} i id */
//            /*snapshot.data() degen object  createdAt: t {seconds: 1603131853, nanoseconds: 348000000}
// displayName: "R-Line"
// email: "areshil91@gmail.com"
// __proto__: Object */
//         setCurrentUser({id: snapshot.id,...snapshot.data()}) /* kogda regimsya to state set bolady. setCurrentUser action arkyly redux store-da hranim currentUser:{createdAt,displayName,email,id}*/
//         })
        
//       } /* userAuth is null,if user signes out we still want to set currentUser to null */
//       else{ /* esli user loggs out currentUser: null isteimyz */
//         setCurrentUser(userAuth) /* sign out basasdy onAuthStateChanged fires userAuth null bolady,v Header componente user.currentUser null bolady i button Sign In bolady */
//       }
//       /* v bd zasosivaem user [21321: {displayName,email,createdAt}] */
//        /* currentUser kerek shtoby button sign in ili sign out boldy, v header peredaem  */
        
//       },error=> console.log(error))

  

 
 
    return (
      <div> {/* kogda exact? kogda  naprimer posle /checkout nety /checkout/blbal. A Naprimer /shop  path='/shop' ne NUZHEN exact oitkeni /shop/jackets bolady*/}
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route path="/shop" component={ShopPage} /> {/* render degen what component to return, esli zaloginelsya nuzhno redirect '/' esli net to componenty SignInAndSignUpPage */}
          <Route exact path="/signin" render={()=> currentUser?(<Redirect to="/"/>): (<SignInAndSignUpPage/>)} />
        </Switch>
      </div>
    );
  } 

/* user degen {currentUser:{id,createdat,email,displName}} selectCurrentUser() automatom peredast state */
const mapsStateToProps = createStructuredSelector({currentUser: selectCurrentUser})


export default connect(mapsStateToProps,{checkUserSession})(App);
