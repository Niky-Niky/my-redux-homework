import { useDispatch } from "react-redux"
import { filterContact } from "../redux/slice"
export const ContactsFilter = (e) => {
    const dispatch = useDispatch()

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     dispatch(filterContact(
    //         {
    //             value: e.currentTarget.elements.filter.value
    //         }
    //     ));

    // }
    
    return(
        <div className="contactsFilter">
            <form action="submit" onSubmit={''}>
                <input type="text" name="filter" />
                <button type="submit">Apply filter</button>
            </form>
        </div>
    )
}