import React, { Component } from 'react'
import './custom-button.styles.scss'


export default ({children,isGoogleSignIn,inverted,...otherProps}) => {
 return (
   <button {...otherProps} className={`${inverted?'inverted':''} custom-button`}>
     {children}
   </button>
 );
}

