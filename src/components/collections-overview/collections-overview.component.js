import React from 'react'
import './collections-overview.component'
import {createStructuredSelector} from 'reselect'
import CollectionPreview from '../preview-collection/collection-preview.component'
import {connect} from 'react-redux'
import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors'

const CollectionsOverview = ({collections})=>{
  return(
 <div className="collections-overview">
   {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview  key={id} {...otherCollectionProps} />
   ))}
 </div>
)}
/* collections degen [{id: "0vkaBx1m7tI7i6ZCrD3F"
items: (7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]
routeName: "womens"
title: "Womens"},{}], selectCollectionsForPreview selector prevratit object v array {collections: {hats: {items,title,routeName,id}}, sneakers: {items,title,routeName,id}}} v  [{id: "0vkaBx1m7tI7i6ZCrD3F"
items: (7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]
routeName: "womens"
title: "Womens"},{}] */
 const mapStateToProps = createStructuredSelector({
     collections: selectCollectionsForPreview
   })

export default connect(mapStateToProps)(CollectionsOverview)