import { IContact } from "../interfaces/i-contact";

interface ContactsListProps {
  contacts: IContact[];
  deleteContact: (id: string) => void;
}
const ContactsList: React.FC<ContactsListProps> = (props) => {
  return (
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
          <tr key={contact._id}>
            <td>{contact.first_name}</td>
            <td>{contact.last_name}</td>
            <td>{contact.email}</td>
            <td>{contact.position}</td>
            <td>
              <button onClick={() => props.deleteContact(contact._id)}>
                Supprimer
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContactsList;
