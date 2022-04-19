import 'firebase/auth'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database'


const firebaseConfig = {
    apiKey: "AIzaSyCTc0qRcMP9Cg8w-zAFsQnQFoE1jqMmDvk",
    authDomain: "react-firebase-auth-9920d.firebaseapp.com",
    databaseURL: "https://react-firebase-auth-9920d-default-rtdb.firebaseio.com",
    projectId: "react-firebase-auth-9920d",
    storageBucket: "react-firebase-auth-9920d.appspot.com",
    messagingSenderId: "466657968219",
    appId: "1:466657968219:web:a1fbbeaafb28954c193f7e"
};

const fire = firebase.default.initializeApp(firebaseConfig);
export const db = fire.database().ref()


export default fire