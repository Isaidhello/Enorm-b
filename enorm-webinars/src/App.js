import React from 'react';
import { Grid } from '@material-ui/core';
import './App.css';
import Navbar from './components/navbar';
import Switcher from './components/Switcher';


function App() {
  return (
    <div>
      <Grid display="flex" flexDirection="column" container sm={12}>
        <Grid item sm={12}>
          <Navbar />
        </Grid>

        <Grid item sm={12}>
          <Switcher />
        </Grid>
      </Grid>

    </div >

  );
}

export default App;