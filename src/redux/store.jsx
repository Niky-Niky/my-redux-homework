import { contactsReducers } from "./slice";

import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
    key: 'root',
    storage,
}

const persistedContactsReducer = persistReducer(persistConfig, contactsReducers)

export const store = configureStore({
    reducer: {
        contacts: persistedContactsReducer,
    },
});

export const persistor = persistStore(store)