import React from 'react';
import { Link } from 'react-router-dom'
import './header.styles.scss'
import { ReactComponent as Logo } from '../../assets/logo/crown.svg'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

// REDUX
import { connect } from 'react-redux'

// SELECTORS
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';


// FIREBASE
import { auth } from '../../firebase/firebase.utils'

const Header = ( props) => (

    <div className='container'>
        <div className='header'>
            <Link className='logo-container' to="/">
                <Logo className='logo' style={{WebkitTapHighlightColor: "transparent"}}/>
            </Link>

            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                {/* <Link className='option' to='/signin'>
                    SIGN IN
                </Link> */}
                {
                    props.currentUser ? 
                    <div className='option sign' onClick={ () => auth.signOut() }>SIGN OUT</div>
                    :
                    <Link className='option sign' to='/signin'>SIGN IN</Link>
                }
                <Link className='option' to='/contact'>
                    CONTACT
                </Link>

                <CartIcon  />
            </div>
                {
                    props.hidden ? null : <CartDropdown />
                }
            
        </div>
    </div>    
);

// REACT-REDUX
// 'state' here is the top level Root Reducer
// so Root Reducer is pulling 'currentUser' from the userReducer.currentUser value
// const mapStateToProps = (state) => ({

//     currentUser: state.user.currentUser,
//     cart: state.cart.hidden
// }); 

// UNSTRUCTURED SELECTOR
// const mapStateToProps = (state) => ({
//     currentUser : selectCurrentUser(state), 
//     hidden : selectCartHidden(state)
// });

// STRUCTURED SELECTOR - imagine if you had 10-20 selectors, this simplifies and passes 1 layer top level state to each selector
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden : selectCartHidden
});


// export default Header;
export default connect(mapStateToProps)(Header);