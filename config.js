import firebase from 'firebase';

// adicione SDK do Firebase
var firebaseConfig = {
  
  apiKey: "AIzaSyANpoBZeuHTerh4fKUBe_xf_A5gv8EzrGQ",

  authDomain: "pro-c67-29bcb.firebaseapp.com",

  databaseURL: "https://pro-c67-29bcb-default-rtdb.firebaseio.com",

  projectId: "pro-c67-29bcb",

  storageBucket: "pro-c67-29bcb.appspot.com",

  messagingSenderId: "247329181770",

  appId: "1:247329181770:web:dc49e64b1e423f1ebe96b3",

  measurementId: "G-0QJJH4KWCY"
};
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
