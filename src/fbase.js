import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
var firebaseConfig = {
    apiKey: "AIzaSyD2QqQa-yvOOYqGlFQrrvQ1w_0lfnUXcvo",
    authDomain: "myworkoutroutine-dfeb3.firebaseapp.com",
    projectId: "myworkoutroutine-dfeb3",
    storageBucket: "myworkoutroutine-dfeb3.appspot.com",
    messagingSenderId: "104911246907",
    appId: "1:104911246907:web:9f57823b6b5197882dae1e",
};
firebase.initializeApp(firebaseConfig);
export const firebaseInstance = firebase;
export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();