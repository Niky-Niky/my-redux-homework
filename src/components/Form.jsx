import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux"
import { addContact } from "../redux/slice";

export const Form = () => {
    
    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        dispatch(addContact({
            name: e.currentTarget.elements.name.value,
            phone: e.currentTarget.elements.tel.value,
            id: nanoid()
        }));

        
    }
    
    return(
        <>
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
            
        </>
    )
}