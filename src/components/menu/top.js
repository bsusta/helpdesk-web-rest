import React, { Component } from 'react';
import { connect } from 'react-redux';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import SettingsIcon from 'material-ui-icons/Settings';
import { Link } from "react-router-dom";

import {setSidebar} from './../../redux/actions';
class Topbar extends Component {

  render() {
    return(
      <AppBar position="static" style={{paddingLeft:this.props.open?210:30}}>
        <Toolbar>
          <IconButton color="contrast" aria-label="Menu" onClick={()=>this.props.setSidebar(!this.props.open)}>
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit" style={{flex:1}}>
            Helpdesk Web
          </Typography>
          <Link to="/settings">
            <IconButton color="contrast" aria-label="Menu">
              <SettingsIcon />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    )
  }
}

const mapStateToProps = ({sidebar}) => {
  const {open} = sidebar;
  return {open};
};

export default connect(mapStateToProps, {setSidebar})(Topbar);