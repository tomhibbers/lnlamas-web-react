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
      paddingBottom: theme.spacing.unit * 2,
      alignContent: "center",
      textAlign: "center"
    }
  });
class ErrorPage extends React.Component<WithStyles<typeof styles>> {
  public render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <img src="/assets/images/error.gif" />
        <Paper className={classes.root} elevation={1}>
          <Typography variant="headline" component="h3">
            Error
          </Typography>
          <br />
          <Typography component="p">Ugh, something went wrong...</Typography>
          <br />
          <Typography component="p">Please try that again.</Typography>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(ErrorPage);
