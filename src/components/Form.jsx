import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux"
import { contactsReducers } from "../redux/slice";

export const ContactsForm = () => {
    
    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        dispatch(contactsReducers(
            {
            name: e.currentTarget.elements.name.value,
            phone: e.currentTarget.elements.tel.value,
            id: nanoid()
            }
        ));


    }
    
    return(
        <div className="contactsForm">
            <p>Add contact</p>
            <form action="submit" onSubmit={handleSubmit}>
                <input 
                type="text" 
                name='name'
                />
                <input
                type='text'
                name='tel'
                />
                <button type="submit">Add Contact</button>
            </form>
        </div>
    )
}