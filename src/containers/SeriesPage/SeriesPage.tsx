import { ListItemText, Paper } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { ListItemLink } from "../../components/ListItemLink/ListItemLink";
import { Chapter } from "../../models/Chapter";
import { Series } from "../../models/Series";
import ChaptersService from "../../services/ChaptersService";
import SeriesService from "../../services/SeriesService";
const styles = (theme: Theme) =>
  createStyles({
    card: {
      display: "flex",
      flexDirection: "column",
      width: 250
    },
    cardMedia: {
      paddingTop: "56.25%" // 16:9
    },
    cardContent: {
      // flexGrow: 1,
      // height: 200,
      // overflow: "hidden"
      // textOverflow: "ellipsis",
    },
    margin: {
      margin: theme.spacing.unit
    },
    media: {
      // ⚠️ object-fit is not supported by IE11.
      objectFit: "cover",
      height: 140
      // width: 100
    },
    loadingPanel: {
      alignContent: "center",
      textAlign: "center"
    },
    info: {
      padding: theme.spacing.unit * 3
    }
  });
interface IState {
  isLoading: boolean;
  series: Series;
  chapterList: Chapter[];
}
interface IProps extends WithStyles<typeof styles> {}
class SeriesPage extends React.Component<
  IProps & RouteComponentProps<any>,
  IState
> {
  public state: IState = {
    isLoading: false,
    series: {},
    chapterList: []
  };
  constructor(props: IProps & RouteComponentProps<any>) {
    super(props);
    this.getSeries();
    this.getChapters();
  }
  public render() {
    const { classes } = this.props;

    if (this.state.isLoading) {
      return (
        <div className={classes.loadingPanel}>
          <h4>Loading...</h4>
          <img src="/assets/images/loading.gif" />
        </div>
      );
    }

    return (
      <div>
        <Grid container={true}>
          <Grid item={true} xs={12}>
            <Grid container={true} justify="center">
              <Card className={classes.card}>
                {!this.state.series.coverImageUri ? null : (
                  <CardMedia
                    className={classes.cardMedia}
                    image={this.state.series.coverImageUri}
                    title={this.state.series.title}
                  />
                )}
                <CardContent className={classes.cardContent}>
                  <Typography
                    gutterBottom={true}
                    variant="headline"
                    component="h2"
                    align="center"
                  >
                    {this.state.series.title}
                  </Typography>
                  <Typography align="center">
                    Rating: {this.state.series.rating}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <br />
        <Paper className={classes.info}>
          {!this.state.series.description ? null : (
            <div>
              <Typography variant="headline" component="h2">
                Description
              </Typography>
              <Typography component="p">
                {this.state.series.description}
              </Typography>
              <br />
            </div>
          )}

          {!this.state.series.titlesAlternative ? null : (
            <div>
              <Typography variant="headline" component="h2">
                Alternative Titles
              </Typography>
              <Typography component="p">
                {this.state.series.titlesAlternative.map(i => i)}
              </Typography>
              <br />
            </div>
          )}

          {!this.state.series.genres ? null : (
            <div>
              <Typography variant="headline" component="h2">
                Genres
              </Typography>
              <Typography component="p">
                {this.state.series.genres.map(i => i)}
              </Typography>
              <br />
            </div>
          )}

          {!this.state.series.tags ? null : (
            <div>
              <Typography variant="headline" component="h2">
                Tags
              </Typography>
              <Typography component="p">
                {this.state.series.tags.map(i => i)}
              </Typography>
              <br />
            </div>
          )}

          {!this.state.series.author ? null : (
            <div>
              <Typography variant="headline" component="h2">
                Author
              </Typography>
              <Typography component="p">{this.state.series.author}</Typography>
              <br />
            </div>
          )}

          {!this.state.series.updated ? null : (
            <div>
              <Typography variant="headline" component="h2">
                Last Updated
              </Typography>
              <Typography component="p">{this.state.series.updated}</Typography>
              <br />
            </div>
          )}

          {!this.state.series.status ? null : (
            <div>
              <Typography variant="headline" component="h2">
                Status
              </Typography>
              <Typography component="p">{this.state.series.status}</Typography>
              <br />
            </div>
          )}
        </Paper>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography gutterBottom={true} variant="headline" component="h2">
              Chapters
              {this.state.chapterList
                ? " (" + this.state.chapterList.length + ")"
                : null}
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className="chapterContainer">
            <List className="chapterListStyle">
              {this.state.chapterList.map(chapter => (
                <ListItemLink
                  className="chapterItem"
                  button={true}
                  key={chapter._id}
                  to={"/read/" + this.state.series._id + "/" + chapter._id}
                >
                  <ListItemText primary={chapter.title} />
                </ListItemLink>
              ))}
            </List>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
  public getSeries = async () => {
    this.state.isLoading = true;
    try {
      const res = await SeriesService.getSeries(this.props.match.params.id);
      this.setState({ series: res.entity as Series });
    } catch (error) {
      // this.setState({ error, isLoading: false });
    }
  };
  public getChapters = async () => {
    try {
      const res = await ChaptersService.getChaptersBySeries(
        this.props.match.params.id
      );
      this.setState({ isLoading: false, chapterList: res.entity as Chapter[] });
    } catch (error) {
      // this.setState({ error, isLoading: false });
    }
  };
}

export default withStyles(styles)(SeriesPage);
// export default withRouter(SeriesPage);
