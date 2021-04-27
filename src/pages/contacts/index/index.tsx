import { useEffect } from "react";
import ContactsList from "../../../components/contacts/contacts-list/contacts-list";
import { useSelector, useDispatch } from "react-redux";
import { getContacts } from "../../../state/contacts/contacts.action-creator";

const Index: React.FC = () => {
  const { contacts, isLoading } = useSelector((state: any) => state.contacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts());
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
