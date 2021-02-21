import React from 'react'

import {SpinnerOverlay,SpinnerContainer} from './with-spinner.styles'

const WithSpinner = WrappedComponent => {
 /* Spinner degen <CollectionsOverviewWithSpinner  isLoading={isCollectionFetching}/> ---- SPinner degen <CollectionPageWithSpinner {...props} isLoading={!isCollectionLoaded} />  */
 const Spinner = ({isLoading,...otherProps})=>{
  /* otherProps degen history,match */
 return isLoading ? (
  <SpinnerOverlay>
   <SpinnerContainer/>
  </SpinnerOverlay>
 ) : (
  <WrappedComponent {...otherProps} />
 )
}

return Spinner
}

export default WithSpinner