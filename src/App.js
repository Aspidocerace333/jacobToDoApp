import React from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//Components
import AddTask from "./AddTask";
import About from "./about";


function App() {
  return (
    <Router>
      <div className="container">
        <br />
        <Route path="/" exact component={AddTask} />
        <Route path="/AddTask" exact component={AddTask} />
        <Route path="/about" exact component={About} />
      </div>
    </Router>
  );
}

export default App;
