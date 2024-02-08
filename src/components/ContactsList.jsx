import { useSelector } from "react-redux"
import { nanoid } from "@reduxjs/toolkit";

export const ContactsList = () => {
    const contacts = useSelector(
        state => state.contacts.contacts 
    );
    
    const contactsName = useSelector(
        state => state.contacts.name
    )
    const filter = useSelector(
        state => state.contacts.filter.value 
    );

    const filterContacts = () => contacts.filter((contact) => contact.name.includes(filter))

    const myFilteredContacts = filterContacts();
    return(
    <ul>
        {console.log(filterContacts())}
        {/* {console.log(myFilterContacts.length > 0)} */}
        {/* {console.log(filterContacts().map((contact) => {return <li key={nanoid()}>{contact}</li>}))} */}
        {
            (myFilteredContacts.length > 0) ? 
            (myFilteredContacts.map((contact) => {return <li key={nanoid()}>{contact}</li>})) : 
            (contacts.map((contact) => {return <li key={contact.id}>{contact.name} - {contact.phone}</li>}))
        }
        {console.log(contacts.map(contact => contact))}
    </ul>
)}