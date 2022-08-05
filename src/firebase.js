import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAC8meQhJtpgoae3uemKUGDa9a2De0PeXA",
    authDomain: "wookie-movies-772e0.firebaseapp.com",
    projectId: "wookie-movies-772e0",
    storageBucket: "wookie-movies-772e0.appspot.com",
    messagingSenderId: "1016093194905",
    appId: "1:1016093194905:web:0d972b6f466a201571d608"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export const provider = new GoogleAuthProvider()