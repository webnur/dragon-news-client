// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmFXiBaTYorEuHgriitFN16PwpmfNJsrQ",
  authDomain: "dragon-news-92873.firebaseapp.com",
  projectId: "dragon-news-92873",
  storageBucket: "dragon-news-92873.appspot.com",
  messagingSenderId: "583082348725",
  appId: "1:583082348725:web:8c276d609212fe6d52aefc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;