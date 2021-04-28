import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { getContacts } from "../state/contacts/contacts.action-creator";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators({ getContacts }, dispatch);
};
