import AppBar from "@material-ui/core/AppBar";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import Switch from "@material-ui/core/Switch";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuIcon from "@material-ui/icons/Menu";
import * as React from "react";

import { Theme } from "@material-ui/core/styles/createMuiTheme";
import createStyles from "@material-ui/core/styles/createStyles";

const styles = (theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20
    },
    root: {
      paddingTop: theme.spacing.unit * 20,
      textAlign: "center"
    },
  });

interface IState {
  auth: boolean;
  anchorEl: any;
}

// class MenuAppBar extends React.Component {
//   state = {
//     auth: true,
//     anchorEl: null,
//   };
class Header extends React.Component<
  WithStyles<typeof styles>,
  IState
> {
  public state = {
    anchorEl: null,
    auth: true,
  };
  public handleChange = (event: any) => {
    this.setState({
      auth: event.target.checked
    });
  };

  public handleMenu = (event: any) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  public handleClose = () => {
    this.setState({ anchorEl: null });
  };

  public render() {
    // const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      // <div className={classes.root}>
      <div className={this.props.classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={this.props.classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="title"
              color="inherit"
              className={this.props.classes.grow}
            >
              Photos
            </Typography>
            {auth && (
              <div>
                <IconButton
                  aria-owns={open ? "menu-appbar" : ""}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    horizontal: "right",
                    vertical: "top",
                  }}
                  transformOrigin={{
                    horizontal: "right",
                    vertical: "top",
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={auth}
                onChange={this.handleChange}
                aria-label="LoginSwitch"
              />
            }
            label={auth ? "Logout" : "Login"}
          />
        </FormGroup>
      </div>
    );
  }
}

// MenuAppBar.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(Header);
