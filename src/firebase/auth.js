import { auth } from './firebase';
import { push } from "gatsby-link";
// Sign In
export const doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

  export const redirectIfLoggedIn = () =>
    auth.onAuthStateChanged(function(user) {
    if (user) {
      push('/editsongs')
    }
  });
