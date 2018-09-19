import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Search from "@material-ui/icons/Search";
import * as React from "react";
import { ButtonLink } from "../../components/ButtonLink/ButtonLink";
import { Series } from "../../models/Series";
import SeriesService from "../../services/SeriesService";
const styles = (theme: Theme) =>
  createStyles({
    layout: {
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
        width: 1100,
        marginLeft: "auto",
        marginRight: "auto"
      },
      alignContent: "center",
      textAlign: "center"
    },
    cardGrid: {
      padding: `${theme.spacing.unit * 8}px 0`
    },
    card: {
      display: "flex",
      flexDirection: "column"
    },
    cardMedia: {
      paddingTop: "56.25%" // 16:9
    },
    cardContent: {
      // flexGrow: 1,
      height: 200,
      overflow: "hidden"
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
    }
  });
interface IState {
  isLoading: boolean;
  hits: any[];
  error: any;
  isToggleOn: boolean;
  seriesList: Series[];
}
class CatalogPage extends React.Component<WithStyles<typeof styles>, IState> {
  public state: IState = {
    isLoading: false,
    hits: [],
    error: null,
    isToggleOn: true,
    seriesList: []
  };

  constructor(props: any) {
    super(props);
    this.getSeries();
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
      <div className={classes.layout}>
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
        {/* <Button onClick={this.getSeries} color="success">
          Load!
        </Button> */}
        <Button onClick={this.getSeries}>Load!</Button>
        <Grid container={true} spacing={40}>
          {this.state.seriesList.map(series => (
            <Grid item={true} key={series.title} sm={6} md={4} lg={3}>
              <Card className={classes.card}>
                {!series.coverImageUri ? null : (
                  <CardMedia
                    className={classes.cardMedia}
                    image={series.coverImageUri}
                    title={series.title}
                  />
                )}
                <CardContent className={classes.cardContent}>
                  <Typography
                    gutterBottom={true}
                    variant="headline"
                    component="h2"
                  >
                    {series.title}
                  </Typography>
                  <Typography component="p">{series.description}</Typography>
                </CardContent>
                <CardActions>
                  <ButtonLink to="/series/">Read</ButtonLink>
                  <ButtonLink to={`/series/${series._id}`}>Info</ButtonLink>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
  public getSeries = async () => {
    this.state.isLoading = true;
    try {
      const res = await SeriesService.getAllSeries();
      this.setState({ seriesList: res.entity, isLoading: false });
    } catch (error) {
      this.setState({ error, isLoading: false });
    }
  };
}

export default withStyles(styles)(CatalogPage);
