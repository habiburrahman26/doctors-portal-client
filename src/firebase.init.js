import { getAuth } from 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyABFadtbSffqTKKCtT8IlTcfYhOGY9G__A',
  authDomain: 'doctors-portal-f39e4.firebaseapp.com',
  projectId: 'doctors-portal-f39e4',
  storageBucket: 'doctors-portal-f39e4.appspot.com',
  messagingSenderId: '174073320961',
  appId: '1:174073320961:web:b2104ee983530b56785200',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
