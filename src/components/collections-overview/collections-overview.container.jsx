import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectIsCollectionFetching} from '../../redux/shop/shop.selectors'
import WithSpinner from '../with-spinner/with-spinner.component'
import CollectionsOverview from './collections-overview.component'
import {compose} from 'redux'
/* CONTAINER PATTER */

const mapStateToProps = createStructuredSelector({
 isLoading: selectIsCollectionFetching
})

const CollectionsOverviewContainer =compose(
 connect(mapStateToProps),
WithSpinner /*WithSpinner peredast CollectionsOverview componenty WithSpinner(CollectionPage) i propsom peredast i primet isLoading. Nam Nuzhno IsLoading componenty libo CollectionPage componenty na osnovanie isCollectionLoaded: true, isLoading: false   */
)(CollectionsOverview)

/*const CollectionsOverviewContainer= connect(mapStateToProps)(WithSpinner(CollectionsOverview))  */

export default CollectionsOverviewContainer