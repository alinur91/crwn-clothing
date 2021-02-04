import React, { Component } from 'react'
import { connect } from 'react-redux'
import MenuItem from '../menu-item/menu-item.component'

import './directory.styles.scss'

import {selectDirectorySections} from '../../redux/directory/directory.selectors'

import {createStructuredSelector} from 'reselect'

const Directory= ({sections})=>{

 return (
     <div className="directory-menu">
       {sections.map(({ id, ...otherSectionProps }) => (
         <MenuItem
           {...otherSectionProps}
           key={id}
         />
       ))}
     </div>
   );
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory)