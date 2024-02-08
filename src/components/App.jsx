import { ContactsList } from "./ContactsList";
import { ContactsFilter } from "./Filter";
import { ContactsForm } from "./Form";

export const App = () => {
  return (
    <>
    <ContactsForm/>
    <ContactsList/>
    <ContactsFilter/>
    </>
  );
};
