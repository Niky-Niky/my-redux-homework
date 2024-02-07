import { configureStore } from "@reduxjs/toolkit";

import { ContactsReducers } from "./slice";

export const store = configureStore({
    reducer: {
        contacts: ContactsReducers,
    },
});