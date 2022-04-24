
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js';
import { getFirestore, collection, getDocs, addDoc, doc, setDoc } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js';
// TODO: Add SDKs for Firebase pvvroducts that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJaKxWm6lgW7twJhgcU5i0OZ_UibdCRpc",
  authDomain: "my-to-do-list-fc7b1.firebaseapp.com",
  databaseURL: "https://my-to-do-list-fc7b1-default-rtdb.firebaseio.com",
  projectId: "my-to-do-list-fc7b1",
  storageBucket: "my-to-do-list-fc7b1.appspot.com",
  messagingSenderId: "90820930895",
  appId: "1:90820930895:web:49b6486055e911f4c4693a",
  measurementId: "G-WGFXL695HW"
};





// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// var button = querySelector('#button').addEventListener("click", function(){
//   console.log(user)
// })

const db = getFirestore(app);
const auth = getAuth()


const user = auth.currentUser;
const signupForm = document.querySelector('.signup')



document.querySelector("#reg").addEventListener("click", function(){




    signupForm.addEventListener('submit', (e) => {
      e.preventDefault()
  
      const email = signupForm.newUser.value
      const password = signupForm.newPass.value
  
      createUserWithEmailAndPassword(auth, email, password)
        .then(cred => {
          console.log('user created:', cred.user)
  
  
          const colAccount = doc(db, 'accounts', cred.user.uid)
  
              setDoc(colAccount, {globalData: [], userData:[] })
  
  
    
  
          signupForm.reset();
  
  
  
  
  
  
        })
        .catch(err => {
          console.log(err.message)
        })

  
    })

})

