import React, { Component } from "react";
import { connect } from "react-redux";

import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";
import SettingsIcon from "material-ui-icons/Settings";
import TextField from "material-ui/TextField";
import SearchIcon from "material-ui-icons/Search";
import Avatar from "material-ui/Avatar";
import deepOrange from "material-ui/colors/deepOrange";
import Button from 'material-ui/Button';

import { Link } from "react-router-dom";

import { setSidebar } from "./../../redux/actions";

const styles = {
  orangeAvatar: {
    color: "#fff",
    backgroundColor: deepOrange[500]
  }
};

class Topbar extends Component {
  render() {
    return (
      <AppBar
        position="static"
        style={{ paddingLeft: this.props.open ? 210 : 30 }}
      >
        <Toolbar>
          <IconButton
            color="contrast"
            aria-label="Menu"
            onClick={() => this.props.setSidebar(!this.props.open)}
          >
            <MenuIcon />
          </IconButton>
          <TextField
            id="search"
            label=""
            style={{backgroundColor:'white'}}
          />

          <IconButton
            color="contrast"
            aria-label="Menu"
          >
          <SearchIcon style={{paddingTop:0}}/>
          </IconButton>
          <Link to="/newTask" style={{ align: "Right", textDecoration:'none' }}>
          <Button color="contrast">
            New Task
          </Button>
          </Link>
          <Typography type="title" color="inherit" style={{flex:1}}>
          </Typography>

          <Link to="/settings" style={{ align: "Right" }}>
            <IconButton color="contrast" aria-label="Menu">
              <SettingsIcon />
            </IconButton>
          </Link>
          <IconButton>
            <Avatar style={styles.orangeAvatar}>BS</Avatar>
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = ({ sidebar }) => {
  const { open } = sidebar;
  return { open };
};

export default connect(mapStateToProps, { setSidebar })(Topbar);
