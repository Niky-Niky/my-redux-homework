import { useSelector } from "react-redux"
// import { ContactsReducers } from "../redux/slice"
export const ContactsList = () => {
    const contacts = useSelector(state => {console.log(state) 
        return state.contacts.contacts})
return(
    <ul>
        {contacts.map((contact) => <li key={contact.id}>{contact.name} - {contact.phone}</li>)}
    </ul>
)}