import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCZTRrcfF6LM_QxrXTxq2EK53yNGg232_A",
    authDomain: "crwn-db-38b51.firebaseapp.com",
    databaseURL: "https://crwn-db-38b51.firebaseio.com",
    projectId: "crwn-db-38b51",
    storageBucket: "crwn-db-38b51.appspot.com",
    messagingSenderId: "1022485807995",
    appId: "1:1022485807995:web:39237c9899821314c0b3de",
    measurementId: "G-JDKNLDFMNX"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;