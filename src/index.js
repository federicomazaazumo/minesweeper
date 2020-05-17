import "./index.scss";

import { Persistor, Store } from "./state/store";

import NavigationRouter from "./components/NavigationRouter";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";

const mountNode = document.querySelector("#rootElement");

ReactDOM.render(
  <Provider store={Store}>
    <PersistGate loading={null} persistor={Persistor}>
      <NavigationRouter />
    </PersistGate>
  </Provider>,
  mountNode
);
