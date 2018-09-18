import Paper from "@material-ui/core/Paper";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { Chapter } from "../../models/Chapter";
import { Page } from "../../models/Page";
import { Series } from "../../models/Series";
import ChaptersService from "../../services/ChaptersService";
import PagesService from "../../services/PagesService";
import SeriesService from "../../services/SeriesService";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2
    }
  });
interface IState {
  isLoading: boolean;
  series: Series;
  chapter: Chapter;
  pages: Page[];
  chapterList: Chapter[];
}
interface IProps extends WithStyles<typeof styles> {
  test: boolean;
}
class ReaderPage extends React.Component<
  IProps & RouteComponentProps<any>,
  IState
> {
  public state: IState = {
    isLoading: false,
    series: {},
    chapter: {},
    pages: [],
    chapterList: []
  };
  constructor(props: IProps & RouteComponentProps<any>) {
    super(props);
    this.getSeries();
    this.getChapter();
    this.getPages();
  }
  public render() {
    const { classes } = this.props;

    if (this.state.isLoading) {
      return (
        <div>
          <h4>Loading...</h4>
          <img src="/assets/images/loading.gif" />
        </div>
      );
    }

    return (
      <div>
        <Paper className={classes.root} elevation={1}>
          <Typography variant="headline" component="h3">
            {this.state.series.title}
          </Typography>
          <Typography variant="headline" component="h4">
            Chapter: {this.state.chapter.title}
          </Typography>
          <Typography component="p">
            {this.state.pages.map(page => page.pageContent)}
            {/* Paper can be used to build surface or other elements for your
            application. */}
          </Typography>
        </Paper>
      </div>
    );
  }
  public getSeries = async () => {
    try {
      const res = await SeriesService.getSeries(
        this.props.match.params.seriesId
      );
      this.setState({ series: res });
    } catch (error) {
      // this.setState({ error, isLoading: false });
    }
  };
  public getChapter = async () => {
    try {
      const res = await ChaptersService.getChapters(
        this.props.match.params.chapterId
      );
      this.setState({ chapter: res });
      this.setState({ isLoading: false, chapterList: res });
    } catch (error) {
      // this.setState({ error, isLoading: false });
    }
  };
  public getPages = async () => {
    try {
      const res = await PagesService.getPagesByChapter(
        this.props.match.params.chapterId
      );
      this.setState({ pages: res });
      // tslint:disable-next-line:no-console
      console.log(this.state.pages);
      this.setState({ isLoading: false, chapterList: res });
    } catch (error) {
      // this.setState({ error, isLoading: false });
    }
  };
}

export default withStyles(styles)(ReaderPage);
