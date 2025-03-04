// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9UIWzlZqckdMiNlKP_GtFjyp_YpCB_Yw",
  authDomain: "bookmyride-2f369.firebaseapp.com",
  projectId: "bookmyride-2f369",
  storageBucket: "bookmyride-2f369.firebasestorage.app",
  messagingSenderId: "610670004781",
  appId: "1:610670004781:web:55e357c3c507ed74f406a4",
  measurementId: "G-TPB0QWM95Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)
export default app;