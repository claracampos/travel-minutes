import { googleAuthProvider, firebase } from "../firebase/firebase";

const login = () => {
  firebase.auth().signInWithPopup(googleAuthProvider);
};

const logout = () => {
  firebase.auth().signOut();
};

export { login, logout };
