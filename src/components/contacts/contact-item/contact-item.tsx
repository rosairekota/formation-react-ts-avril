import { IContact } from "../../../interfaces/i-contact";
interface ContactItemProps {
  contact: IContact;
  deleteContact: (id: string) => void;
}

const ContactItem: React.FC<ContactItemProps> = (props) => {
  return (
    <tr key={props.contact._id}>
      <td>{props.contact.first_name}</td>
      <td>{props.contact.last_name}</td>
      <td>{props.contact.email}</td>
      <td>{props.contact.position}</td>
      <td>
        <button onClick={() => props.deleteContact(props.contact._id)}>
          Supprimer
        </button>
      </td>
    </tr>
  );
};

export default ContactItem;