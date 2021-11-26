// shop saga related code

import { takeLatest, call, put, all } from "redux-saga/effects";

import {
    firestore,
    convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

import {
    fetchCollectionsSuccess,
    fetchCollectionsFailure,
} from "./shop.actions";

import ShopActionTypes from "./shop.types";

// This is the code from shop.reducer that we are replacing with generator function fetchCollectionsAsync()
// export const fetchCollectionsStartAsync = () => {
//     return (dispatch) => {
//         const collectionRef = firestore.collection("collections");
//         dispatch(fetchCollectionsStart());

//         collectionRef
//             .get()
//             .then((snapshot) => {
//                 const collectionsMap =
//                     convertCollectionsSnapshotToMap(snapshot);
//                 dispatch(fetchCollectionsSuccess(collectionsMap));
//             })
//             .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
//     };
// };

export function* fetchCollectionsAsync() {
    try {
        const collectionRef = firestore.collection("collections");
        const snapshot = yield collectionRef.get();
        console.log(snapshot);
        const collectionsMap = yield call(
            convertCollectionsSnapshotToMap,
            snapshot
        );
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message));
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    );
}

export function* shopSagas() {
    yield all([call(fetchCollectionsStart)]);
}
