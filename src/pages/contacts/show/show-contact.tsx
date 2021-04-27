import React from "react";
import { RouteComponentProps } from "react-router-dom";

type ContactIDParam = { id: string };
type ShowContactProps = RouteComponentProps<ContactIDParam>;

const ShowContact: React.FC<ShowContactProps> = ({ match }) => {
  return (
    <>
      <h1>Welcome Mr {match.params.id}</h1>
      <p>Bonjour tout le monde</p>
    </>
  );
};

export default ShowContact;
