import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCPJfJ87nce93zTiHEQFu_5p-8vsnAbDMA",
    authDomain: "fir-react-enorm.firebaseapp.com",
    databaseURL: "https://fir-react-enorm.firebaseio.com",
    projectId: "fir-react-enorm",
    storageBucket: "fir-react-enorm.appspot.com",
    messagingSenderId: "719983742618",
    appId: "1:719983742618:web:dc9a4c95a3c25760a35923"
};
// Initialize Firebase
firebase.initializeApp(config);
export const db = firebase.firestore()
export default firebase;