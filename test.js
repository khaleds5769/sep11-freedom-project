
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js";
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

var username = document.querySelector('#user')
var register = document.querySelector('#reg')
register.addEventListener("click", function(){
  db.createCollection("username").add(username)
})

// var usernames = {
//   username, username, password, password
// }


const colAccount = collection(db, 'username')

 // const addAccount = document.querySelector(".inputAccount")

// addAccount.addEventListener('submit', (e) =>{
// e.preventDefault()

// addAccount(colAccount, {
// password: password.newPass.value,
// username: username.newUser.value



// })
// .then(() => {
//   addAccount.reset()
// })



// })

getDocs(colAccount)
.then(snapshot => {
  // console.log(snapshot.docs)
  let users = []
  snapshot.docs.forEach(doc => {
    users.push({ ...doc.data(), id: doc.id })
  })
  console.log(users)
})
.catch(err => {
  console.log(err.message)
})