
import firebase from 'firebase/compat/app';
import 'firebase/compat/analytics';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyD1sCwegLREYSGq3-F-Yl7mpBJW3jHSEx0",
    authDomain: "chat-app-486de.firebaseapp.com",
    projectId: "chat-app-486de",
    storageBucket: "chat-app-486de.appspot.com",
    messagingSenderId: "604806243498",
    appId: "1:604806243498:web:d18c7eca76521887f45cd3",
    measurementId: "G-6GXBSMJ1P5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

// if (window.location.hostname === 'localhost') {
//     // auth.useEmulator('http://localhost:9099');
//     // db.useEmulator('localhost', '8080');
// }

export { db, auth }
export default firebase;