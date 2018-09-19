import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ButtonLink } from "./ButtonLink";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <ButtonLink to="test-location">Test</ButtonLink>
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
