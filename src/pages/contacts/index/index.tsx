import { useEffect } from "react";
import ContactsList from "../../../components/contacts/contacts-list/contacts-list";
import { useTypedSelector } from "../../../hooks/use-typed-selector";
import { useActions } from "../../../hooks/use-actions";

const Index: React.FC = () => {
  const { contacts, isLoading } = useTypedSelector((state) => state.contacts);
  const { getContacts } = useActions();
  useEffect(() => {
    getContacts();
  }, []);
  const deleteContact = (id: string) => {};
  return (
    <>
      {console.log(isLoading)}
      {isLoading && <p>Chargement...</p>}
      {contacts.length > 0 && (
        <ContactsList contacts={contacts} deleteContact={deleteContact} />
      )}
    </>
  );
};

export default Index;
