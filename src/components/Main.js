import React from "react";
import { Switch, Route } from "react-router-dom";

import Cards from "./Cards";
import Details from "./Details";

function Main() {
  return (
    <main className="p-16">
      <Switch>
        <Route path="/" exact component={Cards} />
        <Route path="/questions/:id" component={Details} />
      </Switch>
    </main>
  );
}

export default Main;
