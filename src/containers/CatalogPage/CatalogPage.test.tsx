import * as React from "react";
import * as ReactDOM from "react-dom";
import CatalogPage from "./CatalogPage";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CatalogPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});

