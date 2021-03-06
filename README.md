# React-based e-Commerce site with Redux

-   This is the optimized version of this project using:

    -   **Progressive Web App (PWA)**
    -   Express backend server
    -   CSS-in-JS
    -   styled components
    -   Firebase
    -   Redux Thunk
    -   Redux Sagas
    -   Hooks
    -   Stripe API
    -   React Lazy Loading Pages
    -   React Suspense

-   Based on course by Zero-to-Mastery

    -   https://github.com/ZhangMYihua/lesson-34

-   Live site here:

    -   https://crown-clothing1234.herokuapp.com/

-   ### I opted not to use Apollo + GraphQL in this implementation because Redux Sagas have already been built out. I have included the notes for Apollo + Graph QL for reference at the bottom

    -   For the Apollo + GraphQL implementation visit here
    -   https://github.com/kawgh1/crown-clothing-graph-ql

# Tools Used

-   ### Progressive Web App (PWA)

    -   Starting with Create React App 4, src/service-worker.js is opt-in only. What does that mean? It means that you may not automatically have the service worker file when you initially create your react app. To generate it, you will have to follow this guide. You can also use this guide on PWA to get the latest:
        -   https://create-react-app.dev/docs/making-a-progressive-web-app/
    -   #### Submitting PWAs to App Stores
        -   https://debuggerdotbreak.judahgabriel.com/2018/04/13/i-built-a-pwa-and-published-it-in-3-app-stores-heres-what-i-learned/
    -   #### PWA - Android vs iOS
        -   https://medium.com/@firt/progressive-web-apps-on-ios-are-here-d00430dee3a7
    -   #### Explore other PWAs
        -   https://appsco.pe/
    -   #### PWA CHECKLIST
        -   https://web.dev/pwa-checklist/
    -   #### Make your own HTTPS certificates with Let's Encrypt
        -   https://letsencrypt.org/docs/
    -   #### ServiceWorker.js inspection/compatibility tool for different browsers
        -   https://jakearchibald.github.io/isserviceworkerready/
    -   #### Implementing Mobile Push Notifications in a PWA

        -   https://auth0.com/blog/introduction-to-progressive-web-apps-push-notifications-part-3/

    -   ![lighthouse-report](https://raw.githubusercontent.com/kawgh1/react-crown-clothing-optimized/performance-and-testing/diagrams/lighthouse2.png)

    -   ### Create React App Update re: PWA

        -   Lighthouse CLI

            -   **npm install -g lighthouse**
            -   **lighthouse https://example.com --view**
            -   Use the CLI command when Chrome browser lighthouse report is erroring out
            -   Note running the command above creates a lighthouse report HTML file in your src directory

        -   Surprise - creating a working Service Worker for a PWA out of a Create React App setup usually ended up requiring you to eject out of CRA. So many headaches around this.

        -   As of November 7, 2020 the core react team doesn't ship with PWA by default anymore, meaning they won't build your service-worker.js file in the final build folder! Do not worry, there are just some additional steps you will have to run to convert your react app to be able to perform the next step modifications to be PWA compliant!

        You only need to do this if you are running react-scripts v.4 or greater or React v17 or greater and you did not create this project using the cra-template-pwa when we initialized our project.

        Follow the following steps:

        1. In a new and separate directory from our current project, generate a new CRA react app with the service worker template:

            **npx create-react-app my-app --template cra-template-pwa**

        2. Copy the service-worker.js and serviceWorkerRegistration.js file from the new created app and add it into our client/src directory.

        3. Copy the all the "workbox-\*" dependencies from the package.json file in the dependencies section and add it into our client folders package.json dependencies. Then re-install your packages using yarn or npm depending on whichever package manager you have been using up to this point!

-   ### PWA in this App

    -   Favicon Generator

        -   https://realfavicongenerator.net/

    -   Manifest Generator

        -   https://app-manifest.firebaseapp.com/

    -   Chrome Lighthouse Tool is very finicky - here is the lighthouse CLI

        -   Lighthouse CLI
            -   **npm install -g lighthouse**
            -   **lighthouse https://example.com --view**
            -   Use the CLI command when Chrome browser lighthouse report is erroring out
            -   Note running the command above creates a lighthouse report HTML file in your src directory

    -   Require HTTPS in browser

        -   **npm install express-sslify**

        -   this package allows us to implement automatic HTTPS on our site, not all web hosting platforms provide this out of the box (like Heroku) - HTTPS is required for PWAs

    -   We have to make one minor change to make sure our code doesn't require us to use https in development. In our server.js file, on line 16 we have:

            app.use(enforce.HTTPS({ trustProtoHeader: true }));

    We want to move this into the conditional block we have that checks if our NODE_ENV is in production mode from line 19-25, simply move the line above into that if block like so:

            if (process.env.NODE_ENV === 'production') {
                app.use(enforce.HTTPS({ trustProtoHeader: true }));
                app.use(express.static(path.join(__dirname, 'client/build')));

                app.get('*', function(req, res) {
                    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
                });
            }

-   ### Axios vs Fetch

    -   #### Fetch
        -   https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#supplying_request_options
    -   #### Axious
        -   https://www.npmjs.com/package/axios

-   ### Sass CSS
    -   **$ npm install node-sass --save**
    -   **Google Fonts**
        -   Indie Flower
        -   Permanent Marker
        -   Rock Salt
        -   Arsenal
        -   Jura (Crown logo)
-   ### React Router
    -   **$ npm install react-router-dom**
-   ### Google Firebase

    -   https://firebase.google.com/
    -   **$ npm install firebase@6.0.2**

-   ## Redux

    -   **$ npm install redux redux-logger react-redux**
        -   Redux Persist
            -   **$ npm install redux-persist**
            -   https://www.npmjs.com/package/redux-persist
            -   Basic usage involves adding `persistReducer` and `persistStore` to your setup.

-   ### Selectors

    -   ## Reselect Library
    -   **$ npm install reselect**
    -   https://www.npmjs.com/package/reselect

        -   Simple ???selector??? library for Redux (and others) inspired by getters in NuclearJS, subscriptions in re-frame and this proposal from speedskater.

            -   Selectors can compute derived data, allowing Redux to store the minimal possible state.
            -   Selectors are efficient. A selector is not recomputed unless one of its arguments changes.
            -   Selectors are composable. They can be used as input to other selectors.
            -   **Selectors are used when you only want to return part of the State or a 'slice'**
                -   **this prevents a total re-render of the component(s)**
                -   `Used in this app to display the current number of items in shopping cart icon`

    File: cart.selectors.js, cart-icon.component.jsx

-   ### Stripe Checkout

    ![Stripe-payment-backend-flow](https://raw.githubusercontent.com/kawgh1/react-crown-clothing-optimized/redux-saga/stripe-payment-flow-with-express-backend.png)

    -   **npm install react-stripe-checkout**
    -   https://github.com/azmenak/react-stripe-checkout

-   ### Styled Components

    -   **npm install styled-components**
    -   https://github.com/styled-components/styled-components
    -   styled components allow features like hover
    -   styled components also allow us pass props to our styles which is basically impossible in regular CSS -

                const Text = styled.div`
                    color: red;
                    font-size: 29px;
                    border: ${({ isActive }) => isActive
                            ? '1px solid black'
                            : '3px dotted green'
                            };
                `;

-   ### Higher Order Components (HOC)

    -   used for displaying the Spinner component when asynchronous data is loading, and our regular components when that data is received

-   ### REDUX THUNK

    -   What is Redux Thunk?
        -   Asynchronous Event Handling with Redux
        -   A piece of middleware that allows us to fire functions
    -   All Thunks are is an action creator that returns a function that gets the `dispatch` method, very similar to the mapDispatchToProps

    -   Instead of creating an action (javascript object) that returns an action (javascript object) we're writing a function that returns a function that gets dispatch in it, so that whenever dispatch is called, it will fire multiple actions

    -   **If redux-thunk middleware is enabled, any time you attempt to `dispatch` a function instead of an object, the middleware will call that function with the `dispatch` method itself as the first argument**

-   ## REDUX SAGAS

    ![Redux-Saga-Flow-Diagram](https://raw.githubusercontent.com/kawgh1/react-crown-clothing-optimized/master/redux-saga-flow-diagram.png)

    -   **npm install redux-saga**
    -   https://redux-saga.js.org/
    -   Sagas are like a set of code that fires a conditionally different function based on the action coming into the Saga Middleware
        -   The more actions you have coming in the more intricate the Saga can get with many layers of conditionality
        -   Can be multiple Sagas listening for the same action or different actions, but they do not run **until** they hear the action they are listening for
    -   **Reducers fire first, then sagas receive the action. From there, sagas can fire off new actions which in turn hit the reducers and other sagas as well!**

-   ### Generator Functions

    -   Functions that have the ability to 'pause' and run single lines of code when called, in sequential order

            function gen(i) {


                yield i;
                yield i + 10;
                return 25;
            }

            const g = gen(5);

            g.next()
            --> returns {value: 5, done: false}
            g.next()
            --> returns {value 15, done: false}
            g.next()
            --> returns {value: 25, done: true}

## Things I Added

-   I added a lot of custom styling, images and mobile view / responsive design

## Build Errors

-   Encountered an error with the node_module grpc

    -   Set Node and NPM versions in package.json

        File: package.json

              "engines": {
                  "node": "12.x"
              },

-   Building on Heroku
-   https://github.com/mars/create-react-app-buildpack
    -   **$ heroku create crown-clothing --buildpack https://github.com/mars/create-react-app-buildpack.git**

## Things I Learned

![Redux Diagram](https://github.com/kawgh1/react-crown-clothing/blob/main/redux-diagram.png)

# REDUX

-   React is best at handling the View - not so good at handling complex State
-   Redux is for managing and scaling large applications that have a lot going on in State
-   Useful for sharing data between Components

    -   **$ npm install redux redux-logger react-redux**
    -   **The React-Redux Component goes in the index.js file** - this give the app access to Redux
        -   called the **{ Provider }**
            -   **import { Provider } from 'react-redux'**
            -   Provider is the Parent of everything in the application - total access
    -   All the Redux files go in a src folder 'src/redux'

                  File: index.js

                      ...
                      import { Provider } from 'react-redux'
                      import App from './App'
                      ...
                      ReactDOM.render(
                          <Provider>
                              <BrowserRouter>
                                  <App />
                              </BrowserRouter>
                          </Provider>,
                          document.getElementById('root)
                      );

-   ### 3 Principles of Redux

    -   1. Single source of truth
        -   There is only one universal State in Redux
    -   2. State is read only
    -   3. Changes made using only pure functions
        -   A pure function is one that always receives an input and always returns a predictable output

-   ### Reducers
    ![reducer-diagram](https://github.com/kawgh1/react-crown-clothing/blob/main/reducer-diagram.png)
-   **Code**

    -   Reducers **listen** to ever user action, but they only care about the actions that particular reducer is associated with (userReducer for example -> only cares about changes involving user status) So if a reducer picks up a relevant action, it will make the update to State, otherwise it will just return the current State unchanged (and some other reducer will go to work to update State)
    -   Every Reducer is just a function that takes a State and an action as paramters and returns either State unchanged or State updated with a new payload
    -   If the Reducer determines a particular action does change State for its items, then the Components tied to that Reducer will not re-render - which is very efficient

        File: redux.js

              const userReducer = (currentState, action) => {

                  switch(action.type) {

                      case 'SET_CURRENT_USER':

                          return {
                              ... currentState,
                              currentUser: action.payload
                          };

                      // if no change, return currentState, no re-rendera
                      default:

                          return currentState;

                  }
              }; // => { currentUser: {...}}

-   ### Redux Flow
    -   **Action --> Root Reducer --> Store --> DOM changes**
    -   Action - a user event, clicking a button
    -   Reducer - **ALL user actions go through the Reducer first**
        -   this is how we keep things organized at scale
        -   user takes user action, inputs in a pure function at the reducer and updates State
    -   Store - represents what our app should look like, State updates
    -   DOM Changes - React detects changes to State and renders appropriately
    -   #### FLUX Pattern
        -   Redux uses an architectural pattern called Flux
        -   **Action --> Dispatcher --> Store --> View**

![redux-flow-diagram](https://github.com/kawgh1/react-crown-clothing/blob/main/redux-flow.png)

-   ### Middleware
    -   Middleware intercepts actions and works on them before they go to the Reducer
    -   **Action --> \***Middleware**\* --> Root Reducer --> Store --> DOM changes**

# Firebase

### Javascript Objects We Get Back From Firestore Database

-   A **query** is a request we make to Firestore to give us something from the **Database**

    -   **Firestore returns us two types of objects: references and snapshots**
        -   Of these objects, they can be either **Document** or **Collection** versions
        -   Firestore will **always** return us these objects, even if nothing exists at/from that query

-   **QueryReference** - Object that represents the **"current"** place in the database that we are querying.

    -   We get a queryReference by calling either:
        -   **firestore.doc('/users/:userId');**
        -   **firestore.collections('/users);**
    -   **The queryReference object does not have the actual data of the collection or document. It instead has properties that tell us details about it, or the method to get the Snapshot object which gives us the data we are looking for.**

-   **QuerySnapshot**
    -   We get a querySnapshot from our collectionReference object
    -   We can check if there are any documents in the collection by calling the **.empty** property which returns a boolean
    -   We can get all the documents in the collection by calling the **.doc** property. It returns an array of our documents as **_documentSnapshot_** objects

### DocumentReference vs CollectionReference

-   We use documentRef objects to perform **CRUD operations** (create, retrieve, update, delete). The documentRef methods are **.set()**, **.get()**, **.update()** and **.delete()**
    -   We can also add documents to collections using the collectionRef object using the **.add()** method.
        -   collectionRef.add({ value: property })
    -   We get the snapshotObject from the referenceObject using the **.get()** method
        -   documentRef.get() or collectionRef.get()
    -   **documentRef returns a documentSnapshot object**
    -   **collectionRef returns a querySnapshot object**

### DocumentSnapshot

-   We get a documentSnapshot object from our documentReference object
-   The documentSnapshot object allows us to check if a document exists at this query using the **.exists** property which returns a boolean
-   We can also get the actual properties on the object by calling the **.data()** method, which returns us a JSON object of the document

    File: App.js

          componentDidMount() {

              this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

                  // if userAuth exist in firestore database
                  if (userAuth) {
                      const userRef = await createUserProfileDocument(userAuth);

                      userRef.onSnapshot(snapShot => {

                              // console.log(snapShot.data());

                              this.setState({
                                  currentUser: {
                                      id: snapShot.id,
                                      ...snapShot.data()
                                  }
                              })

                      });
                  }

              });
          }

# End of project notes - Supplementary notes on Apollo + Graph QL

-   ### GraphQL

    ![graph-ql-diagram](https://raw.githubusercontent.com/kawgh1/react-crown-clothing-optimized/graphql/diagrams/graphql-diagram.png)

    -   GraphQL is a backend language that wraps around an existing database or server that you can make requests to in a different (ideally more efficient, flexible) way than the traditional CRUD / REST (GET, POST, PUT, DELETE) way
    -   REST Example
        -   In order to get a user's comments, user might have to send request to /user endpoint, then user/id/posts endpoint, then user/id/posts/id/comments
        -   lots of back and forth and potentially getting back lots and lots of data we dont need
    -   Graph QL Example

        -   Convert backend server into GraphQL server, only one endpoint, we get whatever data we need, and only that data, the first time, with only one request

    -   #### GraphQL in Practice

        -   requests are made using Queries or Mutations
            -   Queries get data, Mutations modify data
        -   Schema

                type Collection {
                    id: ID!
                    title: String!
                    items: [Item!]!
                }

                type Item {
                    id: ID!
                    name: String!
                    price: Float!
                    imageUrl: String!
                    collection: Collection
                }

                type Query {
                    collections: [Collection!]!
                    collection(id: ID!): Collection
                    getCollectionsByTitle(title: String): Collection
                }

        -   Query code

                  query {
                      collections {
                          id
                          title
                          items {
                              id
                              name
                              price
                          }
                      }
                  }

        -   Returns =>

                  "data": {
                      "collections": [
                          "id": "cjquasdf121",
                          "title": "Hats",
                          "items": [
                              {
                                  "id": "adflasdf14324",
                                  "name": "Brown Brim",
                                  "price": 25
                              },
                              {
                                  "id": "hgfddfgh355",
                                  "name": "Blue Beanie",
                                  "price": 18
                              },
                              {
                                  "id": "asdff213r",
                                  "name": "Gray Fedora",
                                  "price": 40
                              },
                              ...
                              ...
                          ]
                      ]
                  }

    -   ### Building a (backend) GraphQL Server

        -   #### Example
            -   Example using the tools listed below
            -   https://github.com/ZhangMYihua/crwn-clothing-prisma
        -   #### Prisma
            -   ORM for Node with tools for SQL databases as well
            -   https://www.prisma.io/
        -   #### Hasura
            -   Connect Hasura to an existing database and generate a production ready GraphQL API in seconds
            -   https://hasura.io/
        -   #### Apollo Server

            -   Apollo Server is an open-source, spec-compliant GraphQL server that's compatible with any GraphQL client, including Apollo Client. Great way to build production ready, self-documenting GraphQL API that can use data from any source
            -   https://www.apollographql.com/docs/apollo-server/

        -   #### More Graph QL Tools
            -   GraphQL-yoga
                -   https://github.com/dotansimha/graphql-yoga
            -   Step by step how to build a Graph QL server
                -   https://www.apollographql.com/docs/tutorial/introduction/

    -   ### Graph QL vs REDUX

        -   You can use GraphQL and Redux together, but it does add a layer of complexity because now you are managing essentially, two different sets of STATE on the front end - which was what both of these solutions tried to solve in the first place, only one single source of State for the whole app
        -   REDUX is very strong and established, can do just about anything
        -   Graph QL + Apollo are still being developed - troubleshooting and support may be more difficult when building custom solutions

    -   ### Apollo
        ![apollo-diagram](https://raw.githubusercontent.com/kawgh1/react-crown-clothing-optimized/graphql/diagrams/apollo-diagram.png)
