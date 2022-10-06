import { initializeApp } from "firebase/app"
const firebaseConfig = {
  apiKey: "AIzaSyAC0Te3w4IW01MpEHcuQVDmy3HO1Gb6Ytw",
  authDomain: "fit-kit-fire.firebaseapp.com",
  databaseURL: "https://fit-kit-fire-default-rtdb.firebaseio.com",
  projectId: "fit-kit-fire",
  storageBucket: "fit-kit-fire.appspot.com",
  messagingSenderId: "886314945281",
  appId: "1:886314945281:web:1fdd293be21c09b4966900"
};
  const app = initializeApp(firebaseConfig);

  export default app