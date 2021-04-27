import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contacts from "./pages/contacts/index/";
import ShowContact from "./pages/contacts/show/show-contact";
import Home from "./pages/home/home";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contacts" component={Contacts} />
        <Route exact path="/contacts/:id" component={ShowContact} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
