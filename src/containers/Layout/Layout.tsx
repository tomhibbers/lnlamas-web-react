import { MenuList } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import MenuIcon from "@material-ui/icons/Menu";
import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { MenuItemLink } from "../../components/MenuItemLink/MenuItemLink";
import AboutPage from "../AboutPage/AboutPage";
import CatalogPage from "../CatalogPage/CatalogPage";
import ErrorPage from "../ErrorPage/ErrorPage";
import HomePage from "../HomePage/HomePage";
import ReaderPage from "../ReaderPage/ReaderPage";
import SeriesPage from "../SeriesPage/SeriesPage";

const drawerWidth = 240;

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      zIndex: 1,
      overflow: "auto",
      position: "relative",
      display: "flex",
      height: "100%",
      width: "100%",
      alignContent: "center",
      textAlign: "center"
    },
    appBar: {
      position: "absolute",
      marginLeft: drawerWidth,
      [theme.breakpoints.up("md")]: {
        width: `calc(100% - ${drawerWidth}px)`
      }
    },
    navIconHide: {
      [theme.breakpoints.up("md")]: {
        display: "none"
      }
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
      [theme.breakpoints.up("md")]: {
        position: "relative"
      }
    },
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing.unit * 3
    },
    primary: {},
    icon: {}
  });

interface IState {
  mobileOpen: boolean;
}

class Layout extends React.Component<WithStyles<typeof styles>, IState> {
  public state = {
    mobileOpen: false
  };

  public handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  public render() {
    const { classes, theme } = this.props;

    const drawer = (
      <div>
        <MenuList>
          <MenuItemLink to="/">
            <ListItemIcon className={classes.icon}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.primary }}
              inset={true}
              primary="Home"
            />
          </MenuItemLink>
          <MenuItemLink to="/catalog">
            <ListItemIcon className={classes.icon}>
              <LocalLibraryIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.primary }}
              inset={true}
              primary="Catalog"
            />
          </MenuItemLink>
          {/* <div className={classes.toolbar} /> */}
          <Divider />
          <MenuItemLink to="/about">
            <ListItemIcon className={classes.icon}>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.primary }}
              inset={true}
              primary="About"
            />
          </MenuItemLink>
        </MenuList>
      </div>
    );

    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.navIconHide}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" noWrap={true}>
              LNLamas
            </Typography>
          </Toolbar>
        </AppBar>
        <Hidden mdUp={true}>
          <Drawer
            variant="temporary"
            anchor={
              !theme ? "left" : theme.direction === "rtl" ? "right" : "left"
            }
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown={true} implementation="css">
          <Drawer
            variant="permanent"
            open={true}
            classes={{
              paper: classes.drawerPaper
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route exact={true} path="/" component={HomePage} />
            <Route path="/home" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/catalog" component={CatalogPage} />
            <Route path="/error" component={ErrorPage} />
            <Route path="/series/:id" component={SeriesPage} />
            <Route path="/read/:seriesId/:chapterId" component={ReaderPage} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(Layout);
