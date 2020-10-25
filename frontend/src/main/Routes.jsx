import React from "react";
import { Switch, Route } from "react-router";

import Dashboard from "../dashboard/Dashboard";
import BugList from "../bugList/BugList";

export default (props) => (
  <div className='content-wrapper'>
    <Switch>
      <Route exact path='/' component={Dashboard} />
      <Route path='/bugList' component={BugList} />
      <Route from='*' to='/' />
    </Switch>
  </div>
);
