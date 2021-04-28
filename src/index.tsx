import ReactDOM from "react-dom";
import App from "./app";
import store from "./state/store";
import { Provider } from "react-redux";
import "./assets/sass/main.scss";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
