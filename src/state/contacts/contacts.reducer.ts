import { IContact } from "../../interfaces/i-contact";
import { ActionTypes } from "./contacts.type";
import { Action } from "./contacts.actions";

interface ContactsState {
  loading: boolean;
  contacts: IContact[];
  error: string;
}

const initialState = {
  loading: false,
  contacts: [],
  error: "",
};

const reducer = (state: ContactsState = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.GET_CONTACTS:
      return { ...state, loading: true };
    case ActionTypes.GET_CONTACTS_SUCCESS:
      return { ...state, loading: false, contacts: action.payload };
    case ActionTypes.GET_CONTACTS_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default reducer;
