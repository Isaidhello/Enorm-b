import React from 'react';
import { Grid } from '@material-ui/core';
import './App.css';
import Videoplayer from './components/videoplayer';
import Home from './components/Home';
import Navbar from './components/navbar';


function App() {
  return (
    <div>
      <Grid display="flex" flexDirection="column" container sm={12}>
        <Grid item sm={12}>
          <Navbar />
        </Grid>

        <Grid item sm={12}>
          <Videoplayer />
          {/* <Home /> */}
        </Grid>
      </Grid>

    </div >

  );
}

export default App;