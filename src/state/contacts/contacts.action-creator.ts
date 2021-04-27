import contactsAPI from "../../config/api-config";
import { ActionTypes } from "./contacts.type";


export const getContacts = () => {
  return async (dispatch: any) => {
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
