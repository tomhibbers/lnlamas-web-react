import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ListItemLink from "./ListItemLink";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <ListItemLink to="test-location" />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
