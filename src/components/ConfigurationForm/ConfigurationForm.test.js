import ConfigurationForm from "./ConfigurationForm";
import { Provider } from "react-redux";
import React from "react";
import { Store } from "../../state/store";
import { shallow } from "enzyme";

it("Renders without crashing", () => {
  shallow(
    <Provider store={Store}>
      <ConfigurationForm />
    </Provider>
  );
});
