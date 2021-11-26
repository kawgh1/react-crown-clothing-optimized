import React from "react";
// import { Link } from "react-router-dom";
import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink,
} from "./header.styles";
import { ReactComponent as Logo } from "../../assets/logo/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

// REDUX
import { connect } from "react-redux";

// SELECTORS
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { signOutStart } from "../../redux/user/user.actions";

// FIREBASE
import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser, hidden, signOutStart }) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className="logo" />
        </LogoContainer>

        <OptionsContainer>
            <OptionLink to="/shop">SHOP</OptionLink>
            {currentUser ? (
                <OptionLink as="div" onClick={signOutStart}>
                    SIGN OUT
                </OptionLink>
            ) : (
                <OptionLink to="/signin">SIGN IN</OptionLink>
            )}
            <OptionLink to="/shop">CONTACT</OptionLink>

            <CartIcon />
        </OptionsContainer>
        {hidden ? null : <CartDropdown />}
    </HeaderContainer>
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
    hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
    signOutStart: () => dispatch(signOutStart()),
});

// export default Header;
export default connect(mapStateToProps, mapDispatchToProps)(Header);
