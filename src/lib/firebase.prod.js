import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyD3ViDd0IPwj7da0QUlwb7wn3IpKEKKOxU",
    authDomain: "netflix-fullstack.firebaseapp.com",
    databaseURL: "https://netflix-fullstack.firebaseio.com",
    projectId: "netflix-fullstack",
    storageBucket: "netflix-fullstack.appspot.com",
    messagingSenderId: "425865308320",
    appId: "1:425865308320:web:38682b2ac15073c34041c5"
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };