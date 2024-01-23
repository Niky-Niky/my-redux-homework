import { useDispatch } from "react-redux"
import { addContact } from "../redux/slice";

export const Form = () => {
    
    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        dispatch(addContact(e.currentTarget.elements.name.value));

    }
    
    return(
        <>
            <form action="submit" onSubmit={handleSubmit}>
                <input 
                type="text" 
                name='name'
                />
                <button type="submit">Add Contact</button>
            </form>
        </>
    )
}