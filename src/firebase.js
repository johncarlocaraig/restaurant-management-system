// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAB3hnlgMM46XHAJ17K8xjTWYfc7hu9V7k",
  authDomain: "restaurant-management-sy-ff538.firebaseapp.com",
  projectId: "restaurant-management-sy-ff538",
  storageBucket: "restaurant-management-sy-ff538.appspot.com",
  messagingSenderId: "583001331039",
  appId: "1:583001331039:web:5b662d761235dd7fd352ea",
  measurementId: "G-WNNDWK9GLN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);