// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB2kojsw4KNmwyjCFsD3RaGaG75W5Uye38",
    authDomain: "service-review-client-fde22.firebaseapp.com",
    projectId: "service-review-client-fde22",
    storageBucket: "service-review-client-fde22.appspot.com",
    messagingSenderId: "362166723790",
    appId: "1:362166723790:web:424e95af3cdf1b8bca1c9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;