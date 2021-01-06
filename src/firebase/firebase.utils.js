import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC2nzVQ1X850GqLk8PfYunMM0YDYcRGlGk",
    authDomain: "crwn-db-prjct.firebaseapp.com",
    projectId: "crwn-db-prjct",
    storageBucket: "crwn-db-prjct.appspot.com",
    messagingSenderId: "351694054927",
    appId: "1:351694054927:web:2db5cc9d6444108148e57a",
    measurementId: "G-8YSXBPPL1F"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  // Authentication için
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: "select_account"});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;