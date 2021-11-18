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

firebase.initializeApp(config);

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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
