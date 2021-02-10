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


const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({promt: 'select_account'}) /*promt: 'select_account' degen----> trigger poppup google whenever we use this googleAuthprovider for authentication and sign in*/



/* we want to uid in the db, uid nahoditsya v this.unsubscribeFromAuth=auth.onAuthStateChanged(user=> {} */
/* firebase will always give us back the reference object and snapshot object event nothing exists there  */
  export const createUserProfileDocument = async(userAuth,additionalData)=>{
      /* userAuth degen object user user.uid user.email */
      if(!userAuth) {return} /* esli user uzhe est v bd,eshtene istemeiymiz,we want to exist from this funct */
      /* we're going to query inside a firestore for the document to see if it already exist*/
      const userRef = firestore.doc(`users/${userAuth.uid}`) /* collection degen array document degen ishindegi object, userRef degen */
      /* doc degen object */
      // const collectionRef = firestore.collection(`users`)
/* we stored this user obj or not that we've authenticated */
      const snapshot =await userRef.get() /* using snapshot we're going to figure out whether or not there's data there, snapshot.id, snapshot.exist */
      if(!snapshot.exists){ /* esli usera net v db we want to create const users=['123123123': {items: ['123321': {}]}] */
          const {displayName,email} = userAuth /* what data we want to store? */
            const createdAt = new Date()
        /* snapshot bolmasa my prosto create delaem object {} s etim userom */
            try { /* try catch potomy shto we're going to do async request to our db to store this data now. users/userAuth.uid/ suda {} object  */
                await userRef.set({ /* create usera document,object */
                  displayName,email,createdAt,...additionalData
                })
              
            } catch (error) {
              console.log('error creating user', error.message)
            }
      }

      return userRef
  }

/* addCollectionAndDocuments function firebaseta bizdin datany salady const collections=[asd1324v:  {title,items:[{imageUrl,name,price}]},  dhdfeyh3:  {title,items:[{imageUrl,name,price}]}] */
  export const addCollectionAndDocuments =async (collectionKey,objectToAdd)=>{
    const collectionRef = firestore.collection(collectionKey)
    // console.log(collectionRef)
    const batch = firestore.batch() 
    /* objectToAdd degen object array [{title: 'hats',items:[{id,imageUrl,price,name}]}] */
    objectToAdd.forEach(obj=> {  /* obj degen {title,items} */
      const newDocRef = collectionRef.doc() /* give me a new reference in this collection and randomly generate id.newDocRef degen object ishinde id prop bar,path prop bar */
        batch.set(newDocRef,obj) /* newDocRef - document reference and obj degen the value we want to set it to */
    })

   return await batch.commit() /* batch.commit() will fire off our batch request it returns promise */

  }
  
/* collections degen object ishinde property bar docs degen array [{id23123321}],transformedCollection degen minaday [{id: "0vkaBx1m7tI7i6ZCrD3F"
      items: (7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]
      routeName: "womens"
      title: "Womens"}] */
  export const convertCollectionsSnapshotToMap=(collections)=>{
    console.log(collections)
    const transformedCollection= collections.docs.map(doc=>{
      const {title,items}= doc.data()
      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      }
    })

    return transformedCollection.reduce((acc,collection)=>{ /* acc degen object {} v finale budet {hats: {items,title,id,routeName},womens: {items,title,id,routeName}}, collection degen {routeName,title,items,id,items} */
      acc[collection.title.toLowerCase()] = collection /* acc[collection.title.toLowerCase()] = collection  degen delaet object s arraya transformedCollection ----> {hats: {items,title,id,routeName},womens: {items,title,id,routeName}} */
      return acc
    }, {} /* what we wanna reduce down to is that final object, empty object as initial accumulator*/)
  }

  

  export const auth = firebase.auth() /* for google authentication */
export const firestore = firebase.firestore()
export const signInWithGoogle =()=> auth.signInWithPopup(provider)


export default firebase
