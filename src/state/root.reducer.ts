import { combineReducers } from "redux";
import contactReducer from "./contacts/contacts.reducer";

export const rootReducer = combineReducers({
  contacts: contactReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
