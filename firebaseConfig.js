// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBqwVm2GRquVMiNCTHyiW64jYkWYRETdb4",
  authDomain: "brief-message-app-2023.firebaseapp.com",
  projectId: "brief-message-app-2023",
  storageBucket: "brief-message-app-2023.appspot.com",
  messagingSenderId: "669614018798",
  appId: "1:669614018798:web:8877e2aac9a32e451163ff",
  measurementId: "G-LSJCK99VGR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);