import React from "react";
import { Route, Switch } from "react-router";
import Categories from "./categories";
import Configurations from "./configurations";

 
const AppRouter = () => (
  <Switch>
    <Route path="/categories" component={Categories}/>
    <Route path="/configurations" component={Configurations}/>
  </Switch>
)

export default AppRouter;