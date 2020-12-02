import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB6cA5JfTOv6zM6ZEc1oMw82Rp7dfyxIl0",
  authDomain: "clone-9e755.firebaseapp.com",
  databaseURL: "https://clone-9e755.firebaseio.com",
  projectId: "clone-9e755",
  storageBucket: "clone-9e755.appspot.com",
  messagingSenderId: "599036205125",
  appId: "1:599036205125:web:d633546534de51b973eb2c",
  measurementId: "G-SWWWWB6L34",
};

const FirebaseApp = firebase.initializeApp(firebaseConfig);

const db = FirebaseApp.firestore();
const auth = FirebaseApp.auth();

export { db, auth };
