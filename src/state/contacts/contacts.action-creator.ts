import contactsAPI from "../../config/api-config";
import { ActionTypes } from "./contacts.type";
import { Action } from "./contacts.actions";
import { Dispatch } from "redux";

export const getContacts = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionTypes.GET_CONTACTS });
    try {
      const result = await contactsAPI.get("/");
      dispatch({
        type: ActionTypes.GET_CONTACTS_SUCCESS,
        payload: result.data,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.GET_CONTACTS_ERROR,
        payload: error.message,
      });
    }
  };
};
