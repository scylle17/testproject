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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;