import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCnMxH3oQbpVV9l3P0I4hgiwMypyr7uM5A",
    authDomain: "medivault-5a25d.firebaseapp.com",
    projectId: "medivault-5a25d",
    storageBucket: "medivault-5a25d.appspot.com",
    messagingSenderId: "822504503073",
    appId: "1:822504503073:web:a86610e7156b6c865b3060",
    measurementId: "G-3CSVTF32MT"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export { firebase };