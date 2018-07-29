import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDN1OE5ZvCa-v7AwzfK5bALAYXMXuOrNdU",
  authDomain: "montagekc-b4268.firebaseapp.com",
  databaseURL: "https://montagekc-b4268.firebaseio.com",
  projectId: "montagekc-b4268",
  storageBucket: "montagekc-b4268.appspot.com",
  messagingSenderId: "316642690142"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

const auth = firebase.auth();

export {
  auth
};
