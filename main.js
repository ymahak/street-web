import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCmbzHk_9FLW99YV56Q6IC4Izs7bbe56C8",
    authDomain: "login-8149c.firebaseapp.com",
    projectId: "login-8149c",
    storageBucket: "login-8149c.appspot.com",
    messagingSenderId: "305938977946",
    appId: "1:305938977946:web:7f321b05704c6d498abb23",
    measurementId: "G-QW1KFFPPLF"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en';

const provider = new GoogleAuthProvider();

const googleLogin = document.getElementById("google-login-btn");
googleLogin.addEventListener("click", function () {
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const user = result.user;
            console.log(user);
            window.location.href = "../index.html"; // Redirect after successful login
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
           
        });
});
