import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD4O8lx8IOd2iyNMW-l9sSxE2eim-oU2-k",
  authDomain: "todo-firebase-27f0a.firebaseapp.com",
  projectId: "todo-firebase-27f0a",
  storageBucket: "todo-firebase-27f0a.appspot.com",
  messagingSenderId: "1061761969032",
  appId: "1:1061761969032:web:28ec12078e7f38f42ce83d",
  measurementId: "G-NZ69E1XLXF"
};

firebase.initializeApp(firebaseConfig)
export default firebase