import React, { Component } from 'react';
import { auth } from '../firebase';
import { push } from "gatsby-link";

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
  currentUser: null

};

class SignInForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

// componentDidMount() {
//   auth.getCurrentUser()
//   console.log(user)
// }
componentDidMount(){
  auth.redirectIfLoggedIn()
}
  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    // const {
    //   history,
    // } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        push('/editsongs')
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        <input
          value={password}
          onChange={event => this.setState(byPropKey('password', event.target.value))}
          type="password"
          placeholder="Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign In
        </button>

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}


export default SignInForm;
