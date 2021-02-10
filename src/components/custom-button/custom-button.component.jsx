import React, { Component } from 'react'

import {CustomButtonContainer} from './custom-button.styles'


export default ({children, ...props}) => {
 return (
   <CustomButtonContainer  {...props}>
     {children}
   </CustomButtonContainer>
 );
}

