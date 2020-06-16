import React from 'react';
import { Grid } from '@material-ui/core';
import './App.css';
import Videoplayer from './components/videoplayer';


function App() {
  return (
    <div>
      <Grid display="flex" flexDirection="column" container sm={12}>
        <Grid item sm={4}>
          <h1>navbar</h1>
        </Grid>

        <Grid item sm={8}>
          <Videoplayer />
        </Grid>
      </Grid>

    </div >

  );
}

export default App;