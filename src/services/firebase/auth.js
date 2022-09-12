import firebase from '@services/firebase/firebase';

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

const auth = getAuth(firebase);
const provider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  await signInWithPopup(auth, provider);
};

const logout = async () => {
  await signOut(auth);
};

export { auth, provider, signInWithGoogle, logout };
