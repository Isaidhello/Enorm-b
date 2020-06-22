import React from 'react';
import { Grid } from '@material-ui/core';
import './App.css';
import Navbar from './components/Navbar';
import Switcher from './components/Switcher';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">

        {/* Navbar top */}
        <Grid display="flex" flexDirection="column" container sm={12}>
          <Grid item sm={12}>
            <Navbar />
          </Grid>

          {/* Content van de pagina */}
          <Grid item sm={12}>
            <Switcher />
          </Grid>

        </Grid>

      </div >
    </Router>


  );
}

export default App;