import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, NotFound, Dashboard, Login ,About ,Helpandsupport} from "../../Containers";

function AdminRoute() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/about" component={About} />
        <Route path="/helpandsupport" component={Helpandsupport} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}
export default AdminRoute;
