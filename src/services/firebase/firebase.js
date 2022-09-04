import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC8huOznA7o7pio7uUqTopMl2-rk9y7i4s',
  authDomain: 'postsipsum.firebaseapp.com',
  projectId: 'postsipsum',
  storageBucket: 'postsipsum.appspot.com',
  messagingSenderId: '10814487194',
  appId: '1:10814487194:web:6ed8bd30c494333dfd3d23',
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const provider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  const result = await signInWithPopup(auth, provider);
  console.log(result);
};

const logout = async () => {
  await signOut(auth);
};

export { firebase, auth, provider, signInWithGoogle, logout };
