import * as React from "react";
import * as ReactDOM from "react-dom";
import ReaderPage from "./ReaderPage";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(React.createElement(ReaderPage, null), div);
  ReactDOM.unmountComponentAtNode(div);
});
