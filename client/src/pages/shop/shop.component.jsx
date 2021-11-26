import React, { useEffect } from "react";

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

// import {
//     firestore,
//     convertCollectionSnapshotToMap,
// } from "../../firebase/firebase.utils";

import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";

const ShopPage = ({ fetchCollectionsStart, match }) => {
    useEffect(() => {
        fetchCollectionsStart();
    }, [fetchCollectionsStart]);

    return (
        <div className="shop-page">
            <Route
                exact
                path={`${match.path}`}
                component={CollectionsOverviewContainer}
            />
            <Route
                path={`${match.path}/:collectionId`}
                component={CollectionPageContainer}
            />
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
