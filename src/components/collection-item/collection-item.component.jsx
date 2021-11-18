import React from 'react'

import './collection-item.styles.scss'

import CustomButton from '../custom-button/custom-button.component'

// REDUX
import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cart.actions'

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
      <div className='collection-item'>
        <div
          className='image'
          style={{ backgroundImage: `url(${imageUrl})` }} />

        <hr style={{ color: "white", width: "95%", marginBottom: "2px" }} />

        <div className='collection-footer'>
          <span className='name'>{name}</span>

          

          <span className='price'>${price}</span>
        </div>

        <hr style={{ color: "white", marginLeft: "5px", width: "75%", marginTop: "10px" }}/>
        
        <CustomButton onClick={() => addItem(item)} inverted>
          Add to cart
        </CustomButton>
      </div>
    );
  };

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

// export default CollectionItem;
export default connect(null, mapDispatchToProps)(CollectionItem);