import React, { Component } from 'react';
const firebase = require('firebase');
const uuid = require('uuid');
const moment = require('moment');

const config = {
  apiKey: 'AIzaSyDN1OE5ZvCa-v7AwzfK5bALAYXMXuOrNdU',
  authDomain: 'montagekc-b4268.firebaseapp.com',
  databaseURL: 'https://montagekc-b4268.firebaseio.com',
  projectId: 'montagekc-b4268',
  storageBucket: 'montagekc-b4268.appspot.com',
  messagingSenderId: '316642690142',
};
firebase.initializeApp(config);

class Contactform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uid: uuid.v1(),
      name: '',
      email: '',
      message: '',
      subscribe: false
    };
    this.submitData = this.submitData.bind(this);
    this.inputData = this.inputData.bind(this);
  }

  componentDidMount() {
    firebase
    .database()
    .ref(`Formdata/${this.state.uid}`)
    .on('value', snap => console.log('from db', snap.val()));
  }

  submitData(e) {
    const { name, email, message, subscribe} = this.state;
    const dateReceived = firebase.database.ServerValue.TIMESTAMP;
    debugger;
    e.preventDefault();
    firebase
    .database()
    .ref(`Formdata/${this.state.uid}`)
    .set({
      name: name,
      email: email,
      message: message,
      subscribe: subscribe,
      dateReceived: dateReceived
    })
    .catch(error => console.log(error));
    this.setState({
      name: '',
      email: '',
      message: '',
      subscribe: false,
      uid: uuid.v1()
    });

    fetch("https://openapi.band.us/v2.2/band/post/create", {
      method: 'POST',
      mode: 'no-cors',
      headers: new Headers({
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
      body: `access_token=ZQAAAYkkFaySxE3ErqCFL9F6GcvKT71bBXQbwZHgJMPlJlODyGbnlQZUi-i9a304ipg5EOILfOr30LRpvdn9DbjpzQRDFRXb10X29SxhUvap_4n2&band_key=AABkuzRfZnr5J3l6Pi2ynZ-v&content=${JSON.stringify(this.state)}`
    })
    .then(() => {
      alert("Party on dude!");
    })
  }

  inputData(e) {
    this.setState({ [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value });
  }
  render() {
    return (
      <div>
      <form id="contact-form" onSubmit={this.submitData}>
      <input type="text" placeholder="Name" value={this.state.name} onChange={this.inputData} name="name" />
      <input type="email" placeholder="Email" value={this.state.email} onChange={this.inputData} name="email" />
      <input type="textarea" placeholder="Message" value={this.state.message} onChange={this.inputData} name="message" />
      <label>
      Subscribe?
      <input type="checkbox" checked={this.state.subscribe} onChange={this.inputData} name="subscribe" />
      </label>
      <button type="submit">Submit</button>
      </form>
      </div>
    );
  }
}
export default Contactform;
