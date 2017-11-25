import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';

import Dashboard from "./dashboard";
import Topbar from "./menu/top";
import Sidebar from "./menu/left";
import Settings from "./settings";

import Companies from "./settings/companies/companiesList";
import EditCompany from "./settings/companies/editCompany";

import IMAPs from "./settings/imaps";
import Roles from "./settings/roles";
import SMTPs from "./settings/smtps";
import Statuses from "./settings/statuses";
import Attributes from "./settings/task-attributes";
import Units from "./settings/units";
import Users from "./settings/users";

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
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/settings" component={Settings} />
                <Route exact path="/settings/companies" component={Companies} />
                <Route path="/settings/companies/edit/:id" component={EditCompany} />
                <Route exact path="/settings/imaps" component={IMAPs} />
                <Route exact path="/settings/roles" component={Roles} />
                <Route exact path="/settings/smtps" component={SMTPs} />
                <Route exact path="/settings/statuses" component={Statuses} />
                <Route exact path="/settings/task-attributes" component={Attributes} />
                <Route exact path="/settings/units" component={Units} />
                <Route exact path="/settings/users" component={Users} />
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
