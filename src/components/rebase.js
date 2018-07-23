import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

var app = firebase.initializeApp({
  apiKey: 'AIzaSyDN1OE5ZvCa-v7AwzfK5bALAYXMXuOrNdU',
  authDomain: 'montagekc-b4268.firebaseapp.com',
  databaseURL: 'https://montagekc-b4268.firebaseio.com',
  projectId: 'montagekc-b4268'
});

var db = firebase.database(app);
var base = Rebase.createClass(db);

export default base;
