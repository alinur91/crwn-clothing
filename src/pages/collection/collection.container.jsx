import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'
import WithSpinner from '../../components/with-spinner/with-spinner.component'
import CollectionPage from './collection.component'
import {compose} from 'redux'
import {selectIsCollectionsLoaded} from '../../redux/shop/shop.selectors'
/* CONTAINER PATTER */

const mapStateToProps = createStructuredSelector({
 isLoading: state=> !selectIsCollectionsLoaded(state) /* selectIsCollectionsLoaded degen collections true or false collections true bolsa isLoading false poetomy flip ! : true {shop: {collections:{},isFetching: true}} */
})


const CollectionPageContainer= compose( /* CollectionPageContainer don't render anything. They just pass props down to components */
 connect(mapStateToProps),
 WithSpinner /*WithSpinner peredast CollectionPage componenty WithSpinner(CollectionPage) i propsom peredast i primet isLoading. Nam Nuzhno IsLoading componenty libo CollectionPage componenty na osnovanie isCollectionLoaded: true, isLoading: false   */
)(CollectionPage)

export default CollectionPageContainer