import { TextField } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import Search from "@material-ui/icons/Search";
import * as React from "react";
// import Album from "../../components/Album/Album";

const styles = (theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing.unit
    }
  });
class HomePage extends React.Component<WithStyles<typeof styles>> {
  public render() {
    const { classes } = this.props;
    return (
      <div>
      {/* <Album /> */}
        <TextField
          className={classes.margin}
          id="search_input"
          placeholder="Search"
          fullWidth={true}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            )
          }}
        />
        <br />
        <br />
        <h2>Latest</h2>
        <p>...</p>
        <br />
        <h2>Popular</h2>
        <p>...</p>
      </div>
    );
  }
}

export default withStyles(styles)(HomePage);
