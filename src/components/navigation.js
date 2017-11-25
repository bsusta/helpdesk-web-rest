import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Dashboard from "./dashboard";
import Sidebar from "./sidebar";

class Navigation extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <Router>
          <div>
            <Switch>
              <Route path="/" component={Dashboard} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = ({}) => {
  return {};
};

export default connect(mapStateToProps, {})(Navigation);
