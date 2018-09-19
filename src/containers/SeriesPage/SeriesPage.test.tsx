import * as React from "react";
import * as ReactDOM from "react-dom";
import SeriesPage from "./SeriesPage";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(React.createElement(SeriesPage, null), div);
  ReactDOM.unmountComponentAtNode(div);
});
