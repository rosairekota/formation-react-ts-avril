import axios from "axios";

export default axios.create({
  baseURL: "https://contacts-webservice.herokuapp.com/api/contacts",
});
