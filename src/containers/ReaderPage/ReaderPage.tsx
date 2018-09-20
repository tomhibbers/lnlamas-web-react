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
    },
    pageText: {
      textAlign: "justify",
      textAlignLast: "center",
      MozTextAlignLast: "center"
    },
    loadingPanel: {
      alignContent: "center",
      textAlign: "center"
    },
  });
interface IState {
  isLoading: boolean;
  series: Series;
  chapter: Chapter;
  pages: Page[];
  pageParagraphs: string[];
  chapterList: Chapter[];
}
interface IProps extends WithStyles<typeof styles> {}
class ReaderPage extends React.Component<
  IProps & RouteComponentProps<any>,
  IState
> {
  public state: IState = {
    isLoading: false,
    series: {},
    chapter: {},
    pages: [],
    chapterList: [],
    pageParagraphs: []
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
        <div className={classes.loadingPanel}>
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
            {this.state.chapter.title}
          </Typography>
          <br />
          <br />
          {this.state.pageParagraphs.map((paragraph, i) => (
            <Typography key={i} className={classes.pageText} component="p">
              {paragraph}
              <br />
              <br />
            </Typography>
          ))}
        </Paper>
      </div>
    );
  }
  public getSeries = async () => {
    this.state.isLoading = true;
    try {
      const res = await SeriesService.getSeries(
        this.props.match.params.seriesId
      );
      this.setState({ series: res.entity });
    } catch (error) {
      // this.setState({ error, isLoading: false });
    }
  };
  public getChapter = async () => {
    try {
      const res = await ChaptersService.getChapters(
        this.props.match.params.chapterId
      );
      this.setState({ chapter: res.entity });
    } catch (error) {
      // this.setState({ error, isLoading: false });
    }
  };
  public getPages = async () => {
    try {
      const res = await PagesService.getPagesByChapter(
        this.props.match.params.chapterId
      );
      const splitLines = require("split-lines");
      let newPageParagraphs: string[] = [];
      res.entity.forEach((page: Page) => {
        if (page.pageContent) {
          page.pageContent = page.pageContent.replace(/\s\s+/g, "\r\n");
          newPageParagraphs.push(...splitLines(page.pageContent));
        }
      });
      newPageParagraphs = newPageParagraphs.filter(f => {
        if (f !== "") {
          return f;
        }
        return;
      });
      this.setState({
        isLoading: false,
        pages: res.entity,
        pageParagraphs: newPageParagraphs
      });
    } catch (error) {
      // this.setState({ error, isLoading: false });
    }
  };
  public getChapters = async () => {
    try {
      const res = await ChaptersService.getChaptersBySeries(
        this.props.match.params.seriesId
      );
      this.setState({ chapterList: res.entity });
    } catch (error) {
      // this.setState({ error, isLoading: false });
    }
  };
}

export default withStyles(styles)(ReaderPage);
