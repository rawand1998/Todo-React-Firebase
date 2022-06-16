import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA_Vuag1bJGZkZcAJ-t5gUFMHz3ffcSjn4",
  authDomain: "to-do-86129.firebaseapp.com",
  projectId: "to-do-86129",
  storageBucket: "to-do-86129.appspot.com",
  messagingSenderId: "89779293160",
  appId: "1:89779293160:web:7776e0f39a44ecdfa0b25d",
  measurementId: "G-RKMKCCYZHP"
};

firebase.initializeApp(firebaseConfig)
export default firebase