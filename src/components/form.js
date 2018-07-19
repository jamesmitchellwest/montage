import React, { Component } from 'react';
const firebase = require('firebase');
const uuid = require('uuid');

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
      firstName: '',
      lastName: '',
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
    const { firstName, lastName } = this.state;
    e.preventDefault();
    firebase
      .database()
      .ref(`Formdata/${this.state.uid}`)
      .set({
        firstName: firstName,
        lastName: lastName,
      })
      .catch(error => console.log(error));
      this.setState({
        firstName: '',
        lastName: '',
        uid: uuid.v1()
      });
  }
  inputData(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.submitData}>
        <input type="text" placeholder="First Name" value={this.state.firstName} onChange={this.inputData} name="firstName" />
        <input type="text" placeholder="Last Name" value={this.state.lastName} onChange={this.inputData} name="lastName" />
        <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default Contactform;
