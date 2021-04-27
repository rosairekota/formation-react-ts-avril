import { useState, useEffect } from "react";
import { IContact } from "../../../interfaces/i-contact";
import ContactsList from "../../../components/contacts/contacts-list/contacts-list";
import axios from "axios";

const Index: React.FC = () => {
  const [contacts, setContacts] = useState<IContact[]>([]);

  useEffect(() => {
    axios
      .get("https://contacts-webservice.herokuapp.com/api/contacts")
      .then((result) => {
        setContacts(result.data);
      });
  }, []);
  const deleteContact = (id: string) => {
    const newContacts = contacts.filter((contact) => {
      return contact._id !== id;
    });

    setContacts(newContacts);
  };
  return <ContactsList contacts={contacts} deleteContact={deleteContact} />;
};

export default Index;
