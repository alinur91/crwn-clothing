import ShopActionTypes from './shop.types'

import {firestore,convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'

export const fetchCollectionsStart = ()=>({ /* reducerge zhetkende minaday bolady state  return {
      ...state,
      isFetching: true
    } */
 type: ShopActionTypes.FETCH_COLLECTIONS_START,
})

export const fetchCollectionsSuccess = collectionsMap=>({
 /* return {
      ...state,
      isFetching: false,
      collections: action.payload
    } */
type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
payload: collectionsMap

})

export const fetchCollectionsFailure = errorMessage =>({
 type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
 payload: errorMessage
})

export const fetchCollectionsStartAsync = () => dispatch=>{
  const collectionRef = firestore.collection('collections')
  dispatch(fetchCollectionsStart()) /*  isFetching: true bolady */
    // fetch(`https://firestore.googleapis.com/v1/projects/crwn-db-7a69e/databases/(default)/documents/collections`)
    // .then(response=>response.json())
    // .then(collections=>console.log(collections))

      /* getting data from backend,live firebase--very common patern,idea of subsrribustions.Observer pattern,promise based pattern skoree vsego budesh use*/
      /*get() fetches back the data associated to this collection,kak snapshot object  */
      collectionRef.get( ).then(snapshot=>{ /* snapshot degen object ishinde property bar docs degen array [{id23123321,title,items}],convertCollectionsSnapshotToMap degen function sdelaet v finale budet collectionsMap degen===> {hats: {items,title,id,routeName},womens: {items,title,id,routeName}} */
        const collectionsMap= convertCollectionsSnapshotToMap(snapshot)
         dispatch(fetchCollectionsSuccess(collectionsMap)) /* collectionsMap degen collections action. reducer budet {collections:{hats: {items,title,id,routeName},womens: {items,title,id,routeName}}} */
      }) .catch(error=> dispatch(fetchCollectionsFailure(error.message)))
        /* whenever collection ref updates or code gets run for the 1st time this collection ref will send us the snapshot representing code of our collections object array at the time when this code renders*/
}

