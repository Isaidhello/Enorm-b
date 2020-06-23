import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {BrowserRouter} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({

  paper: {
    backgroundColor: "#404040",
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    color: 'white',

  },

  button: {
    background: '#CC0C00',
    border: 0,
    color: 'white',
    height: 45,
    padding: '0 30px',
  },
  label: {
    textTransform: 'capitalize',
  },
  
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

  textField: {
    color: 'white',
    borderColor: 'white'
},
input: {
    color: 'white'
}
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
                <Container maxWidth="lg">
      <h3 className="center">Contact</h3>
      <Grid container spacing={3}>
        <Grid item xs={6}>

                    <Typography component="h1" variant="h5">
          Krijg controle over je online resultaten<p></p>
        </Typography>
Zou je graag willen meedoen of helpen aan onze webinars? Neem vooral contact op met ons en misschien komt u ons vergezelen in een toekomstige webinar.<p></p>

Graag sparren we met ambitieuze mensen met een gaaf idee. Overtuig ons met een goede pitch! Dan denken wij met je mee.<p></p>

Stationsplein 3<br></br>
4811 BB  BREDA<br></br>
The Netherlands<p></p>
 
hello@enorm.com<br></br>
+31 (0) 85 018 50 50<p></p>

KVK: 61950963<br></br>
BTW: NL854563155B01 <br></br>
IBAN: NL51ABNA0442769431
        </Grid>
        <Grid item xs={6}>
        <Typography component="h1" variant="h5">
          Stel ons een vraag.
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
          <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="naam"
                label="Naam"
                type="naam"
                id="naam"
                autoComplete="naam"
                InputProps={{
                  className: classes.textField,
              }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="email"
                label="E-mail"
                type="e-mail"
                id="e-mail"
                autoComplete="email"
                InputProps={{
                  className: classes.textField,
              }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="telefoon"
                label="Telefoon"
                type="telefoon"
                id="telefoon"
                autoComplete="nummer"
                InputProps={{
                  className: classes.textField,
              }}
              />
            </Grid>
 
            <Grid item xs={12}>
            <TextField
                  classes={{
                    textField: classes.button, // class name, e.g. `classes-nesting-root-x`
                    input: classes.label, // class name, e.g. `classes-nesting-label-x`
                  }}
          variant="outlined"
          fullWidth
          id="outlined-multiline-static"
          label=""
          multiline
          rows={4}
          defaultValue="Uw tekst hier"
          InputProps={{
            className: classes.textField,
        }}
        />
            </Grid>
 
 
          </Grid>

          <Button
      classes={{
        root: classes.button, // class name, e.g. `classes-nesting-root-x`
        label: classes.label, // class name, e.g. `classes-nesting-label-x`
      }}
            type="submit"
            variant="contained"
            className={classes.submit}
          >
            Versturen
          </Button>

        </form>

        </Grid>
      </Grid>
      </Container>
    </div>
  );
}