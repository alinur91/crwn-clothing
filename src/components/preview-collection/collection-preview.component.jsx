import React, { Component } from 'react'
import "./collection-preview.styles.scss";
import CollectionItem from '../../components/collection-item/collection-item.component'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'

const CollectionPreview = ({title,items,history,match,routeName})=>{
  return(
 <div className="collection-preview">
  <h1 onClick={()=> history.push(`${match.path}/${routeName}`)} className="title">{title.toUpperCase()}</h1>
  <div className="preview">
    {
        items.filter((item, idx) => idx < 4).map(item => (<CollectionItem item={item} key={item.id}/> ))
    }
  </div>
 </div>
)
}

export default withRouter(CollectionPreview)