import firebase from 'firebase/app'
import 'firebase/firestore' /* for database */
import 'firebase/auth' /* for auth */

const config = { /* yarn add firebase */
  apiKey: "AIzaSyAGqYXgXXMW4DWXIOD9j2dijp2BeGDruAA",
  authDomain: "crwn-db-7a69e.firebaseapp.com",
  databaseURL: "https://crwn-db-7a69e.firebaseio.com",
  projectId: "crwn-db-7a69e",
  storageBucket: "crwn-db-7a69e.appspot.com",
  messagingSenderId: "368328331148",
  appId: "1:368328331148:web:91b2769987665f05fc10a9",
  measurementId: "G-RS285L3175",
};

firebase.initializeApp(config)

// const firestore = firebase.firestore()

// firestore.collection('users').doc('rz0l2n6tskVAXmPlhYfd').collection('items').doc('XdfG4Y5ubxsA4DaL09V5')

// firestore.doc('/users/rz0l2n6tskVAXmPlhYfd/items/XdfG4Y5ubxsA4DaL09V5')

// firestore.collection('/users/rz0l2n6tskVAXmPlhYfd/items/')

export const auth = firebase.auth() /* for google authentication */
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({promt: 'select_account'}) /*promt: 'select_account' degen----> trigger poppup google whenever we use this googleAuthprovider for authentication and sign in*/

export const signInWithGoogle =()=> auth.signInWithPopup(provider)


/* we want to uid in the db, uid nahoditsya v this.unsubscribeFromAuth=auth.onAuthStateChanged(user=> {} */

  export const createUserProfileDocument = async(userAuth,additionalData)=>{
      /* userAuth degen object user user.uid user.email */
      if(!userAuth) {return} /* esli user uzhe est v bd,eshtene istemeiymiz,we want to exist from this funct */
      /* we're going to query inside a firestore for the document to see if it already exist*/
      const userRef = firestore.doc(`users/${userAuth.uid}`)
      /* doc degen object */
/* we stored this user obj or not that we've authenticated */
      const snapshot =await userRef.get() /* using snapshot we're going to figure out whether or not there's data there, snapshot.id, snapshot.exist */
      if(!snapshot.exists){ /* esli usera net v db we want to create const users=['123123123': {items: ['123321': {}]}] */
          const {displayName,email} = userAuth /* what data we want to store? */
            const createdAt = new Date()
        /* snapshot bolmasa my prosto create delaem object {} s etim userom */
            try { /* try catch potomy shto we're going to do async request to our db to store this data now. users/userAuth.uid/ suda {} object  */
                await userRef.set({ /* create usera */
                  displayName,email,createdAt,...additionalData
                })
              
            } catch (error) {
              console.log('error creating user', error.message)
            }
      }

      return userRef
  }

export default firebase
