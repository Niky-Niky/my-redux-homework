import { configureStore } from "@reduxjs/toolkit";

import { ContactsReducers } from "./slice";

export const store = configureStore({
    initialStore:{
        contacts: [],
        exists: false,
    },
    reducer: {
        contactsReducer: ContactsReducers,
    },
});