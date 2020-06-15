import React from 'react';
// import { Grid } from '@material-ui/core'
// import ReactPlayer from 'react-player'
// import SearchAppBar from './components/navbar';
// import Button from '@material-ui/core/Button';
import './App.css';
// import addPlaylist from './icons/add_playlist.png'
import firebase, { db } from './firebase';

// function App() {
//   const [Video, setVideo] = React.useState([])
//   React.useEffect(() => {
//     const fetchData = async () => {
//       const db = firebase.firestore()
//       const data = await db.collection("Video").get()
//       setVideo(data.docs.map(doc => doc.data()))
//     }
//     fetchData()
//   }, [])

//   return (
//     <div className="App">
//       <Grid display="flex" flexDirection="column" container sm={12}>

//         <Grid item sm={12}>
//           <SearchAppBar />
//         </Grid>

//         <Grid item sm={7}>
//           <div>
//             <ReactPlayer controls
//               url='https://www.youtube.com/watch?v=yyo_TcZCrS4' />
//           </div>
//         </Grid>

//         <Button variant="contained" onClick={() => { alert('clicked') }}><img src={addPlaylist} alt="add_playlist" /></Button>


//       </Grid>

//     </div>
//     // return (
//     //   <ul>
//     //     {Gebruiker.map(Gebruiker => (
//     //       <li key={Gebruiker.Naam}>{Gebruiker.Naam}</li>
//     //     ))}
//     //   </ul>
//   );
// }

class App extends React.Component {
  state = {
    Video: null
  }
  //run as soon as app component on screen
  componentDidMount() {
    console.log('mounted')
    db.collection('Video')//ga in collectie Video
      .get() //haal alle bestanden uit die collectie
      .then(snapshot => {  //als de data terug is dan... (data komt terug als snapshot)
        console.log(snapshot)

      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="App">
        <h1>Video Link</h1>
      </div>
    )
  }
}

export default App;
