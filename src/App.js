import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPages from "pages/landingPages";
import "./assets/scss/style.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={LandingPages} />
      </Router>
    </div>
  );
}

export default App;
