import React, { useEffect, lazy, Suspense } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";

// HEADER
import Header from "./components/header/header.component";

// FIREBASE
// import {
//     auth,
//     createUserProfileDocument,
//     addCollectionAndDocuments,
// } from "./firebase/firebase.utils";
// when a user signs in, we want to store that in **STATE** so that our app can know that across all pages and components
// because we want to access our current 'user-object' throughout our app

// REDUX
import { connect } from "react-redux";
// import { setCurrentUser } from "./redux/user/user.actions";

// SELECTORS
import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";
import { createStructuredSelector } from "reselect";

// import { selectCollectionsForPreview } from "./redux/shop/shop.selectors";

// Spinner
import Spinner from "./components/spinner/spinner.component";

// PAGES
// import HomePage from "./pages/homepage/homepage.component";
// import ShopPage from "./pages/shop/shop.component";
// import SigninSignupPage from "./pages/signin-signup/signin-signup.component";
// import CheckoutPage from "./pages/checkout/checkout.component";

// PERFORMANCE - LAZY LOADED PAGES
// lazy loading means, when the main page loads it will load everything except what is explicitly "lazy" loaded
const HomePage = lazy(() => import("./pages/homepage/homepage.component"));
const ShopPage = lazy(() => import("./pages/shop/shop.component"));
const SigninSignupPage = lazy(() =>
    import("./pages/signin-signup/signin-signup.component")
);
const CheckoutPage = lazy(() => import("./pages/checkout/checkout.component"));

const App = ({ checkUserSession, currentUser }) => {
    useEffect(() => {
        checkUserSession();
    }, [checkUserSession]);

    console.log(currentUser);

    return (
        <div>
            <Header />
            <Switch>
                <Suspense fallback={<Spinner />}>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/shop" component={ShopPage} />
                    <Route exact path="/checkout" component={CheckoutPage} />
                    <Route
                        exact
                        path="/signin"
                        render={() =>
                            currentUser ? (
                                <Redirect to="/" />
                            ) : (
                                <SigninSignupPage />
                            )
                        }
                    />
                </Suspense>
            </Switch>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
    checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
