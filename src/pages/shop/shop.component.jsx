import React, { useEffect } from 'react';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container'
import CollectionPageContainer from '../collection/collection.container'
import {  Route } from 'react-router-dom'
import {fetchCollectionsStart} from '../../redux/shop/shop.actions'
import {connect} from 'react-redux'


const ShopPage =({fetchCollectionsStart,match})=>{

  useEffect(()=>fetchCollectionsStart(),[fetchCollectionsStart])


/* CollectionsOverviewContainer,CollectionPageContainer degen opredelit libo loading componenty libo <CollectionPage/> libo <CollectionsOverview/> */
 
    return (
     <div className="shop-page"> {/* props degen match,location */}
       <Route exact path={`${match.path}`} component={CollectionsOverviewContainer}  /> {/* 
       render={(props)=>  
         <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />}
       CollectionsOverviewWithSpinner   invoke istegende libo <Spinner> vernet libo <CollectionsOverview/> vernet, isCollectionFetching degen isFetching: true or false */}
       <Route component={CollectionPageContainer}  path={`${match.path}/:collectionId`}/> {/* isCollectionLoaded degen vernet collections,collections true isLoading=false boly kerek sondyktan flip isteiymiz !isCollectionLoaded  {shop: {collections:{},isFetching: true}}, render={props=> <CollectionPageWithSpinner {...props} isLoading={!isCollectionLoaded} />} */}
     </div>
   );
 }

/* CollectionsOverviewWithSpinner degen ---> const Spinner = ({isLoading,...otherProps})=>{
  
 return isLoading ? (
  <SpinnerOverlay>
   <SpinnerContainer/>
  </SpinnerOverlay>
 ) : (
  <WrappedComponent {...otherProps} />
 )
} */

// const mapStateToProps = createStructuredSelector({
//   /* isCollectionFetching : selectIsCollectionFetching,  *//* selectIsCollectionFetching degen isFetching: true.{shop: {collections:{},isFetching: true}} */
//   isCollectionLoaded: selectIsCollectionsLoaded  /* selectIsCollectionsLoaded degen===collections {shop: {collections:{},isFetching: true}} */
// })



export default connect(null,{fetchCollectionsStart})(ShopPage)