
/**
 * import firebase
 */

// Import necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, get, set } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, updateProfile } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getStorage, ref as storageRef, getDownloadURL, listAll } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

// Initialize Firebase app


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2fxyHrAHrB8k9PzLF4MIaDde6W09wn_4",
  authDomain: "mental-health-7c08f.firebaseapp.com",
  databaseURL: "https://mental-health-7c08f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mental-health-7c08f",
  storageBucket: "mental-health-7c08f.appspot.com",
  messagingSenderId: "184742629329",
  appId: "1:184742629329:web:184d9591d35607c4d29af0"
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const db = getDatabase(app);
const auth = getAuth(app);
const storage = getStorage(app);


document.addEventListener('DOMContentLoaded', () => {
    // Check if user is logged in based on stored data
    const storedUserInfo = JSON.parse(localStorage.getItem("user-info")) || JSON.parse(sessionStorage.getItem("user-info"));
    const storedUserCreds = JSON.parse(localStorage.getItem("user-creds")) || JSON.parse(sessionStorage.getItem("user-creds"));
    const userId = storedUserCreds.uid;
    if (storedUserInfo && storedUserCreds) {
        // The user is already logged in
        document.getElementById('name').textContent = `${storedUserInfo.username}`;




    } else {
        console.error("we are facing some error please go back to last page:", error);
    }
});




const quizForm = document.getElementById('quizForm');

quizForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    // Get the user ID from authentication
    const userId = auth.currentUser.uid;

    // Get the div element containing the radio buttons
    const questionDiv1 = document.getElementById('question1');
    const questionDiv2 = document.getElementById('question2');
    const questionDiv3 = document.getElementById('question3');
    const questionDiv4 = document.getElementById('question4');
    const questionDiv5 = document.getElementById('question5');
    const questionDiv6 = document.getElementById('question6');
    const questionDiv7 = document.getElementById('question7');
    const questionDiv8 = document.getElementById('question8');
    const questionDiv9 = document.getElementById('question9');
    const questionDiv10 = document.getElementById('question10');
    const questionDiv11 = document.getElementById('question11');
    const questionDiv12 = document.getElementById('question12');
    const questionDiv13 = document.getElementById('question13');
    const questionDiv14 = document.getElementById('question14');
    const questionDiv15 = document.getElementById('question15');
    // Get the checked radio button within the div
    const radioButton1 = questionDiv1.querySelector('input[type="radio"]:checked');
    const radioButton2 = questionDiv2.querySelector('input[type="radio"]:checked');
    const radioButton3 = questionDiv3.querySelector('input[type="radio"]:checked');
    const radioButton4 = questionDiv4.querySelector('input[type="radio"]:checked');
    const radioButton5 = questionDiv5.querySelector('input[type="radio"]:checked');
    const radioButton6 = questionDiv6.querySelector('input[type="radio"]:checked');
    const radioButton7 = questionDiv7.querySelector('input[type="radio"]:checked');
    const radioButton8 = questionDiv8.querySelector('input[type="radio"]:checked');
    const radioButton9 = questionDiv9.querySelector('input[type="radio"]:checked');
    const radioButton10 = questionDiv10.querySelector('input[type="radio"]:checked');
    const radioButton11 = questionDiv11.querySelector('input[type="radio"]:checked');
    const radioButton12 = questionDiv12.querySelector('input[type="radio"]:checked');
    const radioButton13 = questionDiv13.querySelector('input[type="radio"]:checked');
    const radioButton14 = questionDiv14.querySelector('input[type="radio"]:checked');
    const radioButton15 = questionDiv15.querySelector('input[type="radio"]:checked');
    // Get the value of the checked radio button
    const selectedValue1 = radioButton1 ? parseInt(radioButton1.getAttribute('data-value')) : 0;
    const selectedValue2 = radioButton2 ? parseInt(radioButton2.getAttribute('data-value')) : 0;
    const selectedValue3 = radioButton3 ? parseInt(radioButton3.getAttribute('data-value')) : 0;
    const selectedValue4 = radioButton3 ? parseInt(radioButton4.getAttribute('data-value')) : 0;
    const selectedValue5 = radioButton5 ? parseInt(radioButton5.getAttribute('data-value')) : 0;
    const selectedValue6 = radioButton6 ? parseInt(radioButton6.getAttribute('data-value')) : 0;
    const selectedValue7 = radioButton7 ? parseInt(radioButton7.getAttribute('data-value')) : 0;
    const selectedValue8 = radioButton8 ? parseInt(radioButton8.getAttribute('data-value')) : 0;
    const selectedValue9 = radioButton9 ? parseInt(radioButton9.getAttribute('data-value')) : 0;
    const selectedValue10 = radioButton10 ? parseInt(radioButton10.getAttribute('data-value')) : 0;
    const selectedValue11 = radioButton11 ? parseInt(radioButton11.getAttribute('data-value')) : 0;
    const selectedValue12 = radioButton12 ? parseInt(radioButton12.getAttribute('data-value')) : 0;
    const selectedValue13 = radioButton13 ? parseInt(radioButton13.getAttribute('data-value')) : 0;
    const selectedValue14 = radioButton14 ? parseInt(radioButton14.getAttribute('data-value')) : 0;
    const selectedValue15 = radioButton14 ? parseInt(radioButton15.getAttribute('data-value')) : 0;

    //total sum
    const sum = selectedValue1+selectedValue2+selectedValue3+selectedValue4+selectedValue5+selectedValue6+selectedValue7+selectedValue8+selectedValue9+selectedValue10+selectedValue11+selectedValue12
    +selectedValue13+selectedValue14+selectedValue15; 

    // Save user information in the database
    set(ref(db, `LAssessment/${userId}`), {
        unprocessedFood: selectedValue1,
        fastFood: selectedValue2,
        ciggarette: selectedValue3,
        alcohol: selectedValue4,
        sugarDrinks : selectedValue5,
        redMeat: selectedValue6,
        sleep: selectedValue7,
        exersice: selectedValue8,
        social: selectedValue9,
        stress: selectedValue10,
        screen: selectedValue11,
        weight: selectedValue12,
        task: selectedValue13,
        diet: selectedValue14,
        substance: selectedValue15,
        total: sum
    }).then(() => {
        alert('User information saved successfully!');
        window.location.href = "treatment.html";
        // Optionally, you can redirect or perform other actions here
    }).catch((error) => {
        console.error('Error saving user information:', error);
    });
});
