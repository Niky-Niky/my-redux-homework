import { createSlice } from "@reduxjs/toolkit";

const ContactsSlice = createSlice({

    name: 'contacts',
    initialState: {
        contacts: [],
        filter: '',
        exists: false,
    },
    reducers: {
        addContact(state, action){
            state.contacts.push(action.payload)
            state.exists = true
        },
        filterContact(state, action){
            console.log(action.payload)
            state.filter = action.payload
        },
    },
});

export const {addContact, filterContact} = ContactsSlice.actions
export const ContactsReducers = ContactsSlice.reducer
