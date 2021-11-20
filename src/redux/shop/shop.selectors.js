import { createSelector } from "reselect";

/* 
One quick addition, our selectCollection function we just wrote is not memoized 
due to collectionUrlParam being passed in from our collection component's mapStateToProps 
running whenever our state changes and and calling a new instance of our selectCollection function. 

In this case collectionUrlParam is a dynamic argument meaning it can change, 
so to memoize selectCollection we actually have to memoize the whole function using 
a memoize helper function. We can leverage the lodash library, specifically 
their memoize helper function by adding it our packages
*/

/* 
If there is no collection, it's better that we return null or an empty array [] so that the components 
that use this selector will get a null object and naturally know, ok there's no data here, 
so I do X, render an empty state if I need to

When our app first boots up and this Collection page mounts its going to look inside the reducer 
and try to find a collections map

however because we have not received the data back yet from our backend, 
because that data request is asynchronous,
our app can possibly be in a state where our data does not exist
so we have to create what's called a LOADING STATE and in this loading state we want to render a spinner
*/

// lodash.memoize
// eslint-disable-next-line
import memoize from "lodash.memoize";
// eslint-disable-next-line
const COLLECTION_ID_MAP = {
    hats: 1,
    shoes: 2,
    jackets: 3,
    womens: 4,
    mens: 5,
};

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    (collections) =>
        collections
            ? Object.keys(collections).map((key) => collections[key])
            : []
);

// lodash.memoize is obsolete
// export const selectCollection = memoize((collectionUrlParam) =>
//   createSelector(
//     [selectCollections],
//     (collections) => collections[collectionUrlParam]
//   )
// );

// export const selectCollection = (collectionUrlParam) =>
//     createSelector([selectCollections], (collections) => {
//         return collections.find((collection) => {
//             return collection.routeName === collectionUrlParam;
//         });
//     });

export const selectCollection = (collectionUrlParam) =>
    createSelector([selectCollections], (collections) =>
        collections ? collections[collectionUrlParam] : null
    );
