import Rebase from "re-base";
import firebase from "firebase";


 const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyBl-gbKjbFQHTcC5_n2c8XJcmcmLCaWjj8",
    authDomain: "hiberblog.firebaseapp.com",
    databaseURL: "https://hiberblog.firebaseio.com",
    projectId: "hiberblog",
    storageBucket: "hiberblog.appspot.com",
    messagingSenderId: "1006374443873",
    appId: "1:1006374443873:web:32635bdc65c81b3d924320",
    measurementId: "G-GTNC1M4PK5"
 });
 const fbase = Rebase.createClass(firebaseApp.database());

 export {fbase,firebaseApp};