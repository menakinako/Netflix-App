import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
 import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyAQFMj2s0eDrMdsP7RRgnW_WEZS_yXs_hs",
    authDomain: "netflix-11f0a.firebaseapp.com",
    projectId: "netflix-11f0a",
    storageBucket: "netflix-11f0a.appspot.com",
    messagingSenderId: "948277425832",
    appId: "1:948277425832:web:5250fab896faf3e41fb49d"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
