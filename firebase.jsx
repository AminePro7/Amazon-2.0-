
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCixfR762UQT7eIMzsRS-dquPiQknUevnY",
  authDomain: "amzn-ecom-9447c.firebaseapp.com",
  projectId: "amzn-ecom-9447c",
  storageBucket: "amzn-ecom-9447c.appspot.com",
  messagingSenderId: "53355037703",
  appId: "1:53355037703:web:d3626a57329993a02616a2"
};


// Initialize Firebase
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

export const db = app.firestore();

export default db;