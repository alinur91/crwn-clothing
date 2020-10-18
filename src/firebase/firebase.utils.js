import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyAGqYXgXXMW4DWXIOD9j2dijp2BeGDruAA",
  authDomain: "crwn-db-7a69e.firebaseapp.com",
  databaseURL: "https://crwn-db-7a69e.firebaseio.com",
  projectId: "crwn-db-7a69e",
  storageBucket: "crwn-db-7a69e.appspot.com",
  messagingSenderId: "368328331148",
  appId: "1:368328331148:web:91b2769987665f05fc10a9",
  measurementId: "G-RS285L3175",
};


firebase.initializeApp(config);

export const auth = firebase.auth()
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({promt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
