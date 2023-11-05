import firebase from  'firebase';

import 'firebase/firestore';

import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAG2iuwoz-7Z18dPxqUFLLB54r-BHAoQmo",
    authDomain: "ecom-9db55.firebaseapp.com",
    projectId: "ecom-9db55",
    storageBucket: "ecom-9db55.appspot.com",
    messagingSenderId: "364407193791",
    appId: "1:364407193791:web:4b27b004f43ddaaa05860a"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;



 