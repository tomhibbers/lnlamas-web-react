import { Paper, Typography } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import * as React from "react";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2
    }
  });
class AboutPage extends React.Component<WithStyles<typeof styles>> {
  public render() {
    const { classes } = this.props;
    return (
      <div>
        <img src="/assets/images/chew.gif" />
        <Paper className={classes.root} elevation={1}>
          <Typography variant="headline" component="h3">
            About LNLamas
          </Typography>
          <br />
          <Typography component="p">
            A library for reading light novels and comic books.
          </Typography>
          <br />
          <Typography component="i">Version : 0.0.1</Typography>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(AboutPage);
