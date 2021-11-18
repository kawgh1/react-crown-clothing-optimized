import React from 'react'

// shop data
// import SHOP_DATA from './shop.data.js'

import './shop.styles.scss'

// redux
// import { connect } from 'react-redux'
// import { createStructuredSelector } from 'reselect'

// // reducers
// import { selectCollections } from '../../redux/shop/shop.selectors'

// import CollectionPreview from '../../components/collection-preview/collection-preview.component'

import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

/////
//
// ShopPage is becoming a simple non-connected component now.
//
// We will now have the child component of the ShopPage be connected.
// 
//////


const ShopPage = ({ match }) => (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );

  export default ShopPage;
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

