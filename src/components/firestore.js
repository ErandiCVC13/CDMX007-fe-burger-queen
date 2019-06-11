import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCjycjgA6nZFiy6FTKAwBlQ-zzyQW7BK5c",
  authDomain: "buger-queen.firebaseapp.com",
  databaseURL: "https://buger-queen.firebaseio.com",
  projectId: "buger-queen",
  storageBucket: "buger-queen.appspot.com",
  messagingSenderId: "210150929662",
  appId: "1:210150929662:web:132801aedef0024e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
