import React from "react";

// shop data
// import SHOP_DATA from './shop.data.js'

import "./shop.styles.scss";

// redux
// import { connect } from 'react-redux'
// import { createStructuredSelector } from 'reselect'

// // reducers
// import { selectCollections } from '../../redux/shop/shop.selectors'

// import CollectionPreview from '../../components/collection-preview/collection-preview.component'

import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

/////
//
// ShopPage is becoming a simple non-connected component now.
//
// We will now have the child component of the ShopPage be connected.
//
//////

// redux
import { connect } from "react-redux";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

import {
    firestore,
    convertCollectionSnapshotToMap,
} from "../../firebase/firebase.utils";

// Spinner
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    // spinner
    state = {
        loading: true,
    };
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection("collections");

        // whenever collection is updated or new collection
        collectionRef.onSnapshot(async (snapshot) => {
            const collectionsMap = convertCollectionSnapshotToMap(snapshot);
            // console.log(collectionsMap);
            updateCollections(collectionsMap);
            // spinner
            this.setState({ loading: false });
        });
    }
    render() {
        const { match } = this.props;
        const { loading } = this.state;
        return (
            <div className="shop-page">
                {/* <Route
                    exact
                    path={`${match.path}`}
                    component={CollectionsOverview}
                /> */}
                <Route
                    exact
                    path={`${match.path}`}
                    render={(props) => (
                        <CollectionsOverviewWithSpinner
                            isLoading={loading}
                            {...props}
                        />
                    )}
                />
                {/* <Route
                    path={`${match.path}/:collectionId`}
                    component={CollectionPage}
                /> */}
                <Route
                    path={`${match.path}/:collectionId`}
                    render={(props) => (
                        <CollectionPageWithSpinner
                            isLoading={loading}
                            {...props}
                        />
                    )}
                />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateCollections: (collectionsMap) =>
        dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
// class ShopPage extends React.Component {

//     constructor(props) {

//         super(props);

//         this.state = {

//             collections: SHOP_DATA
//         };
//     }

// since Component State is now stored in a reducer, we can use a functional component

// const shopPage = ({ collections }) => (

//             <div className='shop-page'>

//                 {collections.map((collection) => (

//                     <CollectionPreview
//                             key={collection.id}
//                             title={collection.title}
//                             items={collection.items}
//                             />
//                 ))}

//             </div>
//         );

// // export default ShopPage;

// const mapStateToProps = createStructuredSelector({
//     collections: selectCollections
// });

// export default connect(mapStateToProps)(shopPage);
