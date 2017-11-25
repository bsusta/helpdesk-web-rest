import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';

import Dashboard from "./dashboard";
import Topbar from "./menu/top";
import Sidebar from "./menu/left";

class Navigation extends Component {
  render() {
    return (
      <div>
        <Router>
        <div>
          <Topbar/>
          <Sidebar/>
            <div style={{paddingLeft:this.props.open?240:60}}>
              <Switch>
                <Route path="/" component={Dashboard} />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = ({sidebar}) => {
  const {open} = sidebar;
  return {open};
};

export default connect(mapStateToProps, {})(Navigation);
