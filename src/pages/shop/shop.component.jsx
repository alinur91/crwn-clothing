import React, { Component } from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import {  Route } from 'react-router-dom'
import CollectionPage from '../collection/collection.component'

import {updateCollections} from '../../redux/shop/shop.actions'

import {connect} from 'react-redux'

import {firestore,convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'

import WithSpinner from '../../components/with-spinner/with-spinner.component'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends Component {
  state={loading: true}

  unsubscribeFromSnapshot=null

  componentDidMount(){
    const {updateCollections} =this.props
    const collectionRef = firestore.collection('collections')

    // fetch(`https://firestore.googleapis.com/v1/projects/crwn-db-7a69e/databases/(default)/documents/collections`)
    // .then(response=>response.json())
    // .then(collections=>console.log(collections))

      /* getting data from backend,live firebase--very common patern,idea of subsrribustions.Observer pattern,promise based pattern skoree vsego budesh use*/
      /*get() fetches back the data associated to this collection,kak snapshot object  */
      collectionRef.get( ).then(snapshot=>{ /* snapshot degen object ishinde property bar docs degen array [{id23123321,title,items}],convertCollectionsSnapshotToMap degen function sdelaet v finale budet collectionsMap degen===> {hats: {items,title,id,routeName},womens: {items,title,id,routeName}} */
        const collectionsMap= convertCollectionsSnapshotToMap(snapshot)
        updateCollections(collectionsMap) /* updateCollections degen action. reducer budet {collections:{hats: {items,title,id,routeName},womens: {items,title,id,routeName}}} */
        this.setState(()=>({loading: false}))
      }) 
        /* whenever collection ref updates or code gets run for the 1st time this collection ref will send us the snapshot representing code of our collections object array at the time when this code renders*/
  }

  

 render() {
   const {match} = this.props
   const {loading} = this.state
    return (
     <div className="shop-page">
       <Route exact path={`${match.path}`}  render={(props)=> <CollectionsOverviewWithSpinner isLoading={loading} {...props} />} /> {/* CollectionsOverviewWithSpinner invoke istegende libo <Spinner> vernet libo <CollectionsOverview/> vernet */}
       <Route render={props=> <CollectionPageWithSpinner {...props} isLoading={loading} />} path={`${match.path}/:collectionId`}/>
     </div>
   );
 }
}



export default connect(null,{updateCollections})(ShopPage)