import React from "react";
import { withRouter } from "react-router-dom";
import {
    CollectionPreviewContainer,
    TitleContainer,
    PreviewContainer,
} from "./collection-preview.styles";

import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items, history, match, routeName }) => (
    <CollectionPreviewContainer>
        {/* I want this to link to the collection overview */}
        <TitleContainer
            onClick={() => history.push(`${match.path}/${routeName}`)}
        >
            {title.toUpperCase()}
        </TitleContainer>

        <hr style={{ color: "red", width: "90%" }} />
        <PreviewContainer>
            {/* REACT */}
            {/* {
            props.items
                    .filter((item, idx) => idx < 3 ) // only show first 3 items in collection
                    .map((item) => (

                        <CollectionItem key={item.id} price={item.price} name={item.name} imageUrl={item.imageUrl}/>
            ))
        } */}

            {/* REDUX */}
            {items
                .filter((item, idx) => idx < 3)
                .map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))}
        </PreviewContainer>
    </CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);

// Initial

// const CollectionPreview = (props) => (

// <div className='collection-preview'>
//     <h1 className='title'>{props.title.toUpperCase()}</h1>
//     <div className='preview'>
//     {
//         props.items
//                 .filter((item, idx) => idx < 4 ) // only show first 4 items in collection
//                 .map((item) => (
//             <div key={item.id}> { item.name } </div>

//         ))
//     }

//     </div>
// </div>
// );
