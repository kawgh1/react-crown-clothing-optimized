import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component";

import { selectCollection } from "../../redux/shop/shop.selectors";

import {
    CollectionPageContainer,
    CollectionTitle,
    CollectionItemsContainer,
} from "./collection.styles";

/* 
If there is no collection, it's better that we return null so that the components 
that use this selector will get a null object and naturally know, ok there's no data here, 
so I do X, render an empty state if I need to

When our app first boots up and this Collection page mounts its going to look inside the reducer 
and try to find a collections map

however because we have not received the data back yet from our backend, 
because that data request is asynchronous,
our app can possibly be in a state where our data does not exist
so we have to create what's called a LOADING STATE and in this loading state we want to render a spinner
*/

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    return (
        <CollectionPageContainer>
            <CollectionTitle>{title}</CollectionTitle>
            <CollectionItemsContainer>
                {items.map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </CollectionItemsContainer>
        </CollectionPageContainer>
    );
};

// we use ownProps here because unlike other selectors, this selector needs a part of the state depending on the URL parameter
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
