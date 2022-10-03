import { initializeApp } from "firebase/app";
  import { getAuth } from "firebase/auth";
  
  // TODO: Replace the following with your app's Firebase project configuration
  // See: https://firebase.google.com/docs/web/learn-more#config-object
  const firebaseConfig = {
    apiKey: "AIzaSyAC0Te3w4IW01MpEHcuQVDmy3HO1Gb6Ytw",
    authDomain: "fit-kit-fire.firebaseapp.com",
    projectId: "fit-kit-fire",
    storageBucket: "fit-kit-fire.appspot.com",
    messagingSenderId: "886314945281",
    appId: "1:886314945281:web:1fdd293be21c09b4966900"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  
  // Initialize Firebase Authentication and get a reference to the service
  const auth = getAuth(app);
  