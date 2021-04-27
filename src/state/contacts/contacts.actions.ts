import { ActionTypes } from "./contacts.type";
import { IContact } from "../../interfaces/i-contact";

export interface IGetContact {
  type: ActionTypes.GET_CONTACTS;
}

export interface IGetContactsSuccess {
  type: ActionTypes.GET_CONTACTS_SUCCESS;
  payload: IContact[];
}

export interface IGetContactsError {
  type: ActionTypes.GET_CONTACTS_ERROR;
  payload: string;
}

export type Action = IGetContact | IGetContactsSuccess | IGetContactsError;
