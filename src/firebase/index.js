import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
import "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyCkIh_2U3uK-3dadRtzyiZ5MBmwM4zoVeQ",
  authDomain: "fir-610f8.firebaseapp.com",
  projectId: "fir-610f8",
  storageBucket: "fir-610f8.appspot.com",
  messagingSenderId: "907901648374",
  appId: "1:907901648374:web:dfbc0ed0e0d40d6427dbd7"
};


firebase.initializeApp(firebaseConfig)


const firestore = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()
const timestamp = firebase.firestore.Timestamp

export { firestore, auth, timestamp, storage }