 import firebase from 'firebase';
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDic5klJbfJwumHgn1PhGBWUyVZVGYDIEA",
    authDomain: "login-1b34c.firebaseapp.com",
    projectId: "login-1b34c",
    storageBucket: "login-1b34c.appspot.com",
    messagingSenderId: "239997848219",
    appId: "1:239997848219:web:3424857426ab93f6e5143e"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;