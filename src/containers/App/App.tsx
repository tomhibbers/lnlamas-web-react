import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import "./App.css";

class App extends React.Component {
  public render() {
    return (
      // <div>
      //   <Layout />
      //   <Router>
      //     <div className="App">
      //       <div className="container">
      //         <ul>
      //           <li>
      //             <Link to="/home">Home</Link>
      //           </li>
      //           <li>
      //             <Link to="/about">About</Link>
      //           </li>
      //         </ul>
      //         <hr />
      //         <Switch>
      //           <Route exact={true} path="/" component={HomePage} />
      //           <Route path="/home" component={HomePage} />
      //           <Route path="/about" component={AboutPage} />
      //           <Route path="/error" component={ErrorPage} />
      //         </Switch>
      //       </div>
      //     </div>
      //   </Router>
      // </div>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );
  }
}

export default App;
