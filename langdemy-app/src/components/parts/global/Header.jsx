import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import { Link } from "react-router-dom";

const styles = {
  list: {
    width: 250,
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class Header extends Component {
  state = {
    left: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render () {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          <Link to="/">
            <ListItem button>
              <ListItemText primary="Lesson Ready" />
            </ListItem>
          </Link>
          <Link to="/schedule">
            <ListItem button>
              <ListItemText primary="Schedule" />
            </ListItem>
          </Link>
          <Link to="/signup">
            <ListItem button>
              <ListItemText primary="Sign up" />
            </ListItem>
          </Link>
          <Link to="/signin">
            <ListItem button>
              <ListItemText primary="Sign in" />
            </ListItem>
          </Link>
        </List>
      </div>
    );

    return (
      <div className={classes.root}>
        <AppBar position="relative" color="inherit">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer('left', true)}>
              <MenuIcon />
            </IconButton>
            <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
              <div
                tabIndex={0}
                role="button"
                onClick={this.toggleDrawer('left', false)}
                onKeyDown={this.toggleDrawer('left', false)}
              >
                {sideList}
              </div>
            </Drawer>
            <strong>
              <Link to="/" style={{ boxShadow: 'none', textDecoration: 'none', color: 'inherit', fontFamily: 'Montserrat, sans-serif', }}>React Quest Team1 App</Link>
            </strong>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);