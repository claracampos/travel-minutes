import { googleAuthProvider, firebase } from "../firebase/firebase";

const login = () => {
  firebase.auth().signInWithPopup(googleAuthProvider);
};

export default login;
