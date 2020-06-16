import React from 'react';
import { Grid } from '@material-ui/core'
import ReactPlayer from 'react-player'
// import SearchAppBar from './components/navbar';
import Button from '@material-ui/core/Button';
import addPlaylist from '../icons/add_playlist.png'
import { db } from '../firebase';


export default class Videoplayer extends React.Component {
    state = {
        Video: null
    }
    //run as soon as app component on screen
    componentDidMount() {
        console.log('mounted')
        db.collection('Video')//ga in collectie Video
            .get() //haal alle bestanden uit die collectie
            .then(snapshot => {  //als de data terug is dan... 
                const Video = []
                snapshot.forEach(doc => {
                    const data = doc.data()
                    Video.push(data)
                })
                this.setState({ Video: Video })
                console.log(snapshot)

            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div className="Videplayer">

                <Grid display="flex" flexDirection="column" container sm={12}>

                    {/* <Grid item sm={12}>
            <SearchAppBar />
          </Grid> */}

                    <Grid item sm={7}>
                        <div>
                            {
                                this.state.Video &&
                                this.state.Video.slice(2).map(Video => { //slice 2 uit de array dus 1 blijft over + wat de functie doet is maakt alles uit de array beschikbaar als 'Video'
                                    return ( //return een reactplayer met de opgehaalde video url
                                        <div>
                                            <ReactPlayer controls
                                                url={Video.Url} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </Grid>

                    <Button variant="contained" onClick={() => { alert('clicked') }}><img src={addPlaylist} alt="add_playlist" /></Button>

                </Grid>

            </div>
        )
    }
}

// export default App;
