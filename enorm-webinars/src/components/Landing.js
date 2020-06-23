import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Iframe from 'react-iframe'
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({

    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },


  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {

  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const tiers = [
  {
    title: 'Free',
    price: '0',
    description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  },
  {
    title: 'Pro',
    subheader: 'Most popular',
    price: '15',
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support',
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise',
    price: '30',
    description: [
      '50 users included',
      '30 GB of storage',
      'Help center access',
      'Phone & email support',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
];
const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

export default function Pricing() {
  const classes = useStyles();

  return (
    <React.Fragment>


      {/* Hero unit */}
      <Container maxWidth="lg" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="white" gutterBottom>
            <p></p>
        Webinars with an innovative twist
        </Typography>
        <Typography variant="h5" align="center" paragraph>
            At EnoRm we love to share our knowledge with our customers and every now and then we host a webinar and invite those who have intrest. In these webinars we cover topics about new technologies within our workfield and invite one of customers to join the webinar.
With them we discuss how it is to work with Enorm from start to finish.<p></p>
            <div className="video">
                    <Iframe className="video1" url="https://www.youtube.com/embed/doFfDfI59o8"
                        frameBorder="0"
                        width="400px"
                        height="280px"
                        id="myId"
                        /*display="initial"*/
                        /*position="right"*/ />
                </div>
            </Typography>
      </Container>
      {/* End hero unit */}
  
      <div className={classes.root}>
                <Container maxWidth="lg">
      <h3 className="center">Design</h3>
      <Grid container spacing={3}>
        <Grid item xs>
        <img
                    src="./images/thumb1.png"
                    width="350px"
                    height="200px"
                    className="d-inline-block align-top"
                    alt="enorm"
                />
        </Grid>
        <Grid item xs>
        <img
                    src="./images/thumb2.png"
                    width="350px"
                    height="199.5px"
                    className="d-inline-block align-top"
                    alt="enorm"
                />
        </Grid>
        <Grid item xs>

        <img
                    src="./images/thumb5.png"
                    width="350px"
                    height="200px"
                    className="d-inline-block align-top"
                    alt="enorm"
                />
        </Grid>
      </Grid>
      <h3 className="center">Devlopment</h3>
      <Grid container spacing={3}>
        <Grid item xs>
        <img
                    src="./images/thumb4.png"
                    width="350px"
                    height="200px"
                    className="d-inline-block align-top"
                    alt="enorm"
                />
        </Grid>
        <Grid item xs>
        <img
                    src="./images/thumb3.png"
                    width="350px"
                    height="200px"
                    className="d-inline-block align-top"
                    alt="enorm"
                />
        </Grid>
        <Grid item xs>
                <img
                    src="./images/thumb6.png"
                    width="350px"
                    height="200px"
                    className="d-inline-block align-top"
                    alt="enorm"
                />
        </Grid>
      </Grid>
            </Container>
      
    </div>

    </React.Fragment>
  );
}