import { useState, useEffect } from "react";
import { IContact } from "../interfaces/i-contact";
import ContactsList from "./contacts-list";
import axios from "axios";

const App: React.FC = () => {
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

export default App;
