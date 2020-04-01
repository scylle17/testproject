import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyApPEyVQc8aNDqQEcgNSOynZeOKV9ZBWDM",
    authDomain: "crwn-db-temp.firebaseapp.com",
    databaseURL: "https://crwn-db-temp.firebaseio.com",
    projectId: "crwn-db-temp",
    storageBucket: "crwn-db-temp.appspot.com",
    messagingSenderId: "557074307837",
    appId: "1:557074307837:web:ed376108736849d7c0fc94",
    measurementId: "G-GXJW66VBWM"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;