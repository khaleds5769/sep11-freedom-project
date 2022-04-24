import {  getDoc, getFirestore, collection, addDoc } from "firebase/firestore";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

var button = querySelector('#button').addEventListener("click", function(){
  console.log(user)
})

const db = getDatabase(app)

var username = document.querySelector('#user')
var register = document.querySelector('#reg')
register.addEventListener("click", function(){
  db.createCollection("username").add(username)
})

var usernames = {
  username, username, password, password
}


const colAccount = collection(db, 'username')

 // const addAccount = document.querySelector(".inputAccount")

addAccount.addEventListener('submit', (e) =>{
e.preventDefault()

addAccount(colAccount, {
password: password.newPass.value,
username: username.newUser.value



})
.then(() => {
  addAccount.reset()
})



})

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