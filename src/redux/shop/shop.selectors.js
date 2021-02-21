import {createSelector} from 'reselect'


const selectShop = state => state.shop

export const selectCollections = createSelector(
 [selectShop],
 shop=> shop.collections
)

export const selectCollectionsForPreview = createSelector(
 [selectCollections],
 collections=> collections?Object.values(collections):[] /* back to array. collections render methodte basynda null bolady,componentDidMountta toka v reducere poyavitsya */
) 

/* collectionUrlParam degen match.params.collectionId hats or sneakers */
export const selectCollection = collectionUrlParam => createSelector(
 [selectCollections],
 collections=> collections? collections[collectionUrlParam]: null
)

export const selectIsCollectionFetching = createSelector(
 [selectShop],
 shop => shop.isFetching
)

export const selectIsCollectionsLoaded= createSelector(
 [selectShop],
 shop => !!shop.collections
)