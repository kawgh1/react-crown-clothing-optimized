import React from "react";

import {
    CollectionItemContainer,
    CollectionFooterContainer,
    AddButton,
    BackgroundImage,
    NameContainer,
    PriceContainer,
} from "./collection-item.styles";

// REDUX
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

// REACT

// const CollectionItem = (props) =>  (

//     <div className='collection-item'>
//         <div className='image'
//                 style={{backgroundImage: `url(${props.imageUrl})`}} />

//         <hr style={{ color: "white", width: "95%" }} />

//         <div className='collection-footer'>
//             <span className='name'>{props.name}

//              <hr style={{ color: "white", marginLeft: "0px", width: "95%" }}/>

//             </span>
//             <span className='price'>${props.price}</span>
//         </div>
//         <CustomButton onClick={() => addItem(props.item)} inverted>Add to cart</CustomButton>
//     </div>
// );

// REDUX

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;

    return (
        <CollectionItemContainer>
            <BackgroundImage className="image" imageUrl={imageUrl} />

            <hr style={{ color: "white", width: "95%", marginBottom: "2px" }} />

            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>${price}</PriceContainer>
            </CollectionFooterContainer>

            <hr
                style={{
                    color: "white",
                    marginLeft: "5px",
                    width: "75%",
                    marginTop: "10px",
                }}
            />

            <AddButton onClick={() => addItem(item)} inverted>
                Add to cart
            </AddButton>
        </CollectionItemContainer>
    );
};

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item)),
});

// export default CollectionItem;
export default connect(null, mapDispatchToProps)(CollectionItem);
