import React, { Component } from 'react'
import './custom-button.styles.scss'


export default ({children,isGoogleSignIn,...otherProps}) => {
 return (
   <button {...otherProps} className={`${isGoogleSignIn?'google-sign-in':''} custom-button`}>
     {children}
   </button>
 );
}