import React, { useEffect, lazy, Suspense } from "react";

// shop data
// import SHOP_DATA from './shop.data.js'

// redux
// import { connect } from 'react-redux'
// import { createStructuredSelector } from 'reselect'

// // reducers
// import { selectCollections } from '../../redux/shop/shop.selectors'

// import CollectionPreview from '../../components/collection-preview/collection-preview.component'

import { Route } from "react-router-dom";

// import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
// import CollectionPage from "../collection/collection.component";

// redux
import { connect } from "react-redux";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

// Spinner
import Spinner from "../../components/spinner/spinner.component";

// import {
//     firestore,
//     convertCollectionSnapshotToMap,
// } from "../../firebase/firebase.utils";

// ROUTES / SUB PAGES WITHIN SHOP PAGE
// import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
// import CollectionPageContainer from "../collection/collection.container";

// PERFORMANCE - LAZY LOADED PAGES
// lazy loading means, when the main page loads it will load everything except what is explicitly "lazy" loaded
const CollectionsOverviewContainer = lazy(() =>
    import(
        "../../components/collections-overview/collections-overview.container"
    )
);
const CollectionPageContainer = lazy(() =>
    import("../collection/collection.container")
);

const ShopPage = ({ fetchCollectionsStart, match }) => {
    useEffect(() => {
        fetchCollectionsStart();
    }, [fetchCollectionsStart]);

    return (
        <div className="shop-page">
            <Suspense fallback={<Spinner />}>
                <Route
                    exact
                    path={`${match.path}`}
                    component={CollectionsOverviewContainer}
                />
                <Route
                    path={`${match.path}/:collectionId`}
                    component={CollectionPageContainer}
                />
            </Suspense>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
