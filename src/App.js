import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Questions from "./pages/Questions";
import Result from "./pages/Result";
import { QuestionProvider } from "./assets/context";
import Error from "./pages/Error";

export default function App() {
  return (
    <Router>
      <Switch>
        <QuestionProvider>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/Questions" component={Questions} /> */}
          <Route exact path="/Result" component={Result} />
        </QuestionProvider>
        {/* <Route component={Error} /> */}
      </Switch>
    </Router>
  );
}
