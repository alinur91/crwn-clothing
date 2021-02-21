import React from 'react'
import './collection.styles.scss'
import {connect} from 'react-redux'
import {selectCollection} from '../../redux/shop/shop.selectors'
import CollectionItem from '../../components/collection-item/collection-item.component'

const CollectionPage = ({collection})=>{
  /* collection degen {items,title,id,imageUrl,price} */
 const {title,items}= collection
 return (
 <div className='collection-page'>
   <h2 className='title'>{title}</h2>
   <div className="items">
     {
       items.map(item=> <CollectionItem key={item.id} item={item} />)
     }
   </div>
 </div>
)
}

const mapStateToProps =(state, {match})=>({collection:selectCollection(match.params.collectionId)(state)})

export default connect(mapStateToProps)(CollectionPage)