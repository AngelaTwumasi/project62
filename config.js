 import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCurP59tuj06aIUEJ4kwWD4i_KjHDgDOxU",
    authDomain: "school-attendance-ab7b8.firebaseapp.com",
    databaseURL: "https://school-attendance-ab7b8-default-rtdb.firebaseio.com",
    projectId: "school-attendance-ab7b8",
    storageBucket: "school-attendance-ab7b8.appspot.com",
    messagingSenderId: "352935447881",
    appId: "1:352935447881:web:a289083b1f1e8a8285de98"
  };

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
 

console.log(firebase.name);
console.log(firebase.database());
 
 

  