// Root Reducer is the actual Base Reducer that all other reducers flow into
import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

// component reducers
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

// redux-persist
import { persistReducer } from 'redux-persist'
// local storage
import storage from 'redux-persist/lib/storage'


// white list is what reducers we want redux-persist to persist
// user is already being handled by firebase authentication
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']   
}

// export default combineReducers({
//     user: userReducer,
//     cart: cartReducer
// });

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);

