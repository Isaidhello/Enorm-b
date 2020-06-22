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
        db.collection('Video').where("vidID", "==", 2)//ga in collectie Video en pak met vidID 2
            .get()
            .then(snapshot => {  //als de data terug is dan... 
                const Video = []
                snapshot.forEach(doc => {
                    const data = doc.data()
                    Video.push(data)
                })
                this.setState({ Video: Video })
                console.log("Video data:", Video)

            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div className="Videplayer">

                <Grid display="flex" flexDirection="column" container sm={12}>

                    <Grid item sm={7}>
                        <div>
                            {
                                this.state.Video &&
                                this.state.Video.map(Video => { //slice 2 uit de array dus 1 blijft over + wat de functie doet is maakt alles uit de array beschikbaar als 'Video'
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

                    <Button variant="contained" onClick={() => {

                        // db.collection("Playlist").where("naam", "==", "play1")
                        //     .get()
                        //     .then(snapshot => {
                        //         snapshot.docs.forEach(doc => {
                        //             console.log(doc.id, doc.data())
                        //         })
                        //     })

                        db.collection("Playlist").doc("1").set({
                            name: "playToegevoegd",
                            video: "dit is een vid titel"
                        })
                            .then(function () {
                                console.log("Document successfully written!");
                            })
                            .catch(function (error) {
                                console.error("Error writing document: ", error);
                            });

                    }}>
                        <img src={addPlaylist} alt="add_playlist" />
                    </Button>

                </Grid>

            </div>
        )
    }
}

// export default App;
