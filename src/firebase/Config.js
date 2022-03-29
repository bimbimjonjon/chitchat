
import firebase from 'firebase/compat/app';
import 'firebase/compat/analytics';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

auth.useEmulator('http://localhost:9099');
if (window.location.hostname === 'localhost') {
    db.useEmulator('localhost', '8080')
}

export { db, auth }
export default firebase;