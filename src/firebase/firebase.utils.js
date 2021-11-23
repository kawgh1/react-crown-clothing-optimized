import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyCRJyTtQWLJtliwks8xnRpGjCZ5K3AivRU",
    authDomain: "crown-db-62654.firebaseapp.com",
    projectId: "crown-db-62654",
    storageBucket: "crown-db-62654.appspot.com",
    messagingSenderId: "981561321482",
    appId: "1:981561321482:web:db7a7b6f7a9de1ad6d17f3",
    measurementId: "G-WM192G384F",
};

firebase.initializeApp(config);

// FireStore Database
export const createUserProfileDocument = async (userAuth, additionalData) => {
    // if there is no Google user on Google Signin -> if userAuth == null

    if (!userAuth) return; // exit

    // console.log(firestore.doc('users/12'));
    // const userRef = firestore.doc('users/12');
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    // snapShot's exist property tells us if there's any data there or not
    const snapShot = await userRef.get();

    // console.log(snapShot);

    // if returned snapShot.exists property == false, ie, user does not exist in firestore
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        // then create that new user from the data in our userAuth object in the database

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            });
        } catch (error) {
            console.log("error creating user", error.message);
        }
    }

    return userRef;
};

// populate product collection in firebase
// used in componentDidMount in App.js - only ran once to populate
export const addCollectionAndDocuments = async (
    collectionKey,
    objectsToAdd
) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach((obj) => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
};

// get collection snapshot and map to transformed collection that we can take the title and items out of from firebase
// to use in our routing and rendering
export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map((doc) => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items,
        };
    });

    // console.log(transformedCollection);
    // we pass in our initial object
    // the initial object goes into the first element in the transformedCollection and sets the first value to the title -> 'hats'
    // so now it's an empty object with a property of 'hats' that is equal to the hats collection
    // then it iterates again and grabs 'jackets'
    // so now it's an empty object with a property of hats and jackets equal to the hats and jackets collections
    // iterates again until all the collections are now properties of this object
    // returns the object
    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
};

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged((userAuth) => {
            unsubscribe();
            resolve(userAuth);
        }, reject);
    });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
