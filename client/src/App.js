import React from "react";

//My Components
import Search from "./Search"
import HowTo from "./HowTo"
import Welcome from "./Welcome"
import FavoritesList from "./FavoritesList"

import { Switch, Route } from "react-router-dom"


export default function App() {
  return (
    <div>

      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/search" component={Search} />
        <Route exact path="/how-to" component={HowTo} />
        <Route path="/favorites" component={FavoritesList} />
      </Switch>
      <footer>©2018</footer>
    </div>
  );
}