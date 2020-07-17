import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./components/Homepage";
import SingleMovie from "./components/SingleMovie";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/:id" exact component={SingleMovie} />
          {/* <Route path="*" component={NotFound} /> */}
        </Switch>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
