import React from "react";
import { Switch, Route } from "react-router";

import Dashboard from "../dashboard/Dashboard";
import ProjectBugList from "../bugList/ProjectBugList";
import Projects from "../projects/Projects";

export default (props) => (
  <div className='content-wrapper'>
    <Switch>
      <Route exact path='/' component={Dashboard} />
      <Route path='/projects' component={Projects} />
      <Route path='/:id' component={ProjectBugList} />
      <Route from='*' to='/' />
    </Switch>
  </div>
);
