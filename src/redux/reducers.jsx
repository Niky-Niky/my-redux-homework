import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact } from "./actions";

const initialState = {
    contacts: [],
    filter: "",
}

export const contactsReducer = createReducer(initialState, (builder) => {
    builder 
    .addCase(addContact, (state, action) => {
        // state.contacts = [...contacts, action.payload]
    })
})