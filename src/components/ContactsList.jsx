import { useSelector } from "react-redux"
import { nanoid } from "@reduxjs/toolkit";

export const ContactsList = () => {
    
    //Using selectors to take data from state
    
    const contacts = useSelector(
        state => state.contacts.contacts 
    );
    
    const filter = useSelector(
        state => state.contacts.filter.value 
    );

    //Creating filter func and 'set filter to default' func

    const filterContacts = () => contacts.filter((contact) => contact.name.toLowerCase().includes(filter));

    const handleDefaultFilter = () => (contacts.map((contact) => <li key={nanoid()}>{contact.name} - {contact.phone}</li>));
    
    
    return(
    <ul>
        {console.log(contacts.filter((contact) => contact.name.toLowerCase().includes(filter)))}
        {/* <button onSubmit={handleDefaultFilter}>Set no filter</button> */}
        {
        (filterContacts().length > 0) ? 
        (filterContacts().map((contact) => <li key={nanoid()}>{contact.name} - {contact.phone}</li>)) : 
        (contacts.map((contact) => <li key={nanoid()}>{contact.name} - {contact.phone}</li>))
        }
        {/* {console.log(filterContacts().length > 0)} */}
        {/* {console.log(filter)} */}
    </ul>
)}