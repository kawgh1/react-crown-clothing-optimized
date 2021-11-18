import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom'



// PAGES
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import SigninSignupPage from './pages/signin-signup/signin-signup.component';
import CheckoutPage from './pages/checkout/checkout.component';

// HEADER
import Header from './components/header/header.component'

// FIREBASE
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
// when a user signs in, we want to store that in **STATE** so that our app can know that across all pages and components
// because we want to access our current 'user-object' throughout our app

// REDUX
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions'

// SELECTORS
import { selectCurrentUser } from './redux/user/user.selectors'
import { createStructuredSelector } from 'reselect'

class App extends React.Component {

  // Since this constructor was only used for setting currentUser
  // we don't need it anymore and it has been replaced by `mapDispatchToProps` at bottom
  // constructor() {
  //   super();

  //   this.state = {
  //     currentUser: null
  //   };
  // }

  unsubscribeFromAuth = null

  componentDidMount() {
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({ currentUser: user});
      // createUserProfileDocument(user);
      // if userAuth exist in firestore database
      if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);

          // get snapshot of user
          userRef.onSnapshot(snapShot => {

            // console.log(snapShot.data());
            // set this App's current user using userRef's properties from firestore

              // REACT
              // this.setState({
                
              //     currentUser: {
              //         id: snapShot.id,
              //         ...snapShot.data()
              //     }

              // REDUX
              this.props.setCurrentUser({
                
                    id: snapShot.id,
                    ...snapShot.data()
                
                  // since setState() is an asynchronous call, 
                  // have to pass console.log as a second function as a parameter in setState
                  // running console.log immediately after an async call 
                  // will return null because the async call is not finished yet
              }
              //, () => {
                // console.log(this.state);
              // }
              );


          });
      }

      // if user signs out, it will reset userAuth to null, thus our App's current user will be bull
      // REACT
      // this.setState({ currentUser: userAuth });
      // REDUX
      this.props.setCurrentUser(userAuth);
      // console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {

    return (
      <div className='container'>
        {/* <HomePage /> */}
  
        
  
        {/* <Header currentUser={this.state.currentUser} /> 
        currentUser is now set in the Header Componet from the Redux Root Reducer */}
        <Header />
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={CheckoutPage} />
            {/* <Route exact path='/signin' component={SigninSignupPage} /> */}
            <Route exact path='/signin' 
                    render={() => this.props.currentUser ? (<Redirect to='/' />)
                                                          : (<SigninSignupPage />)} 
                                      
            />
            
        </Switch>
        
  
      </div>
    );
  }
  
}

// REACT
// used when user is signed in, shouldnt be able to access sign in page
// we are pulling 'user' from redux state
// const mapStateToProps = ({user}) => ({

//   currentUser: user.currentUser

// });

// REACT
const mapDispatchToProps = dispatch => ({
  // dispatch is a method that tells redux, whatever object you're passing me,
  // is going to be an action object that I'm going to pass to every reducer
  setCurrentUser: user => dispatch(setCurrentUser(user))

});

// STRUCTURED SELECTOR
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

// export default App;
// export default connect(null, mapDispatchToProps)(App);
export default connect(mapStateToProps, mapDispatchToProps)(App);
