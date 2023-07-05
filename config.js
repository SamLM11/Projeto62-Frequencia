 import firebase from "firebase";

//inicialize seu banco de dados
const firebaseConfig = {
  apiKey: "AIzaSyDgiQBa_w-NTVXZkGAHPwoHwN7B-D2XrKo",
  authDomain: "projeto60-200c0.firebaseapp.com",
  databaseURL: "https://projeto60-200c0-default-rtdb.firebaseio.com",
  projectId: "projeto60-200c0",
  storageBucket: "projeto60-200c0.appspot.com",
  messagingSenderId: "1093331540037",
  appId: "1:1093331540037:web:b685dc6d36bc419abeab2c"
};

if(!firebase.apps.length){ 
  firebase.initializeApp(firebaseConfig); 
} export default firebase.database()
 

