import {takeLatest,call,put,all} from 'redux-saga/effects' /* takeEvery listens for every action of a spec type that we pass to it */
import ShopActionTypes from './shop.types'

import {firestore,convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'

import {fetchCollectionsFailure,fetchCollectionsSuccess} from './shop.actions'


export function* fetchCollectionsStartAsync(){
 yield console.log('fired')
try{
 const collectionRef = firestore.collection('collections')
 const snapshot = yield collectionRef.get()
 const collectionsMap = yield call(convertCollectionsSnapshotToMap,snapshot)
 yield put(fetchCollectionsSuccess(collectionsMap)) /* put degen dispatch siyakty */
} catch(e){
 yield put(fetchCollectionsFailure(e.message))
}

    // fetch(`https://firestore.googleapis.com/v1/projects/crwn-db-7a69e/databases/(default)/documents/collections`)
    // .then(response=>response.json())
    // .then(collections=>console.log(collections))

      /* getting data from backend,live firebase--very common patern,idea of subsrribustions.Observer pattern,promise based pattern skoree vsego budesh use*/
      /*get() fetches back the data associated to this collection,kak snapshot object  */
      // collectionRef.get( ).then(snapshot=>{ /* snapshot degen object ishinde property bar docs degen array [{id23123321,title,items}],convertCollectionsSnapshotToMap degen function sdelaet v finale budet collectionsMap degen===> {hats: {items,title,id,routeName},womens: {items,title,id,routeName}} */
      //   const collectionsMap= convertCollectionsSnapshotToMap(snapshot)
      //    dispatch(fetchCollectionsSuccess(collectionsMap)) /* collectionsMap degen collections action. reducer budet {collections:{hats: {items,title,id,routeName},womens: {items,title,id,routeName}}} */
      // }) .catch(error=> dispatch(fetchCollectionsFailure(error.message)))
}

export function* fetchCollectionsStart(){
 yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START,fetchCollectionsStartAsync)
}

export function* shopSagas(){
  yield all ([ call(fetchCollectionsStart)  ])
}