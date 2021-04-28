import { IContact } from "../../../interfaces/i-contact";
import ContactItem from "../contact-item/contact-item";
import "./contacts-list.style.scss";

interface ContactsListProps {
  contacts: IContact[];
  deleteContact: (id: string) => void;
}
const ContactsList: React.FC<ContactsListProps> = (props) => {
  return (
    <>
      <h1 className="title">Liste des contacts</h1>
      <table>
        <thead>
          <tr>
            <th>Prénom</th>
            <th>Nom</th>
            <th>Email</th>
            <th>Poste</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.contacts.map((contact) => (
            <ContactItem
              key={contact._id}
              contact={contact}
              deleteContact={props.deleteContact}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ContactsList;
