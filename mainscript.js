
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js';
import { getFirestore, collection, getDocs, addDoc, doc, onSnapshot, setDoc } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js';
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



onAuthStateChanged(auth, (user) => {

    const docRef = doc(db, 'accounts', user.uid)
    
    onSnapshot(docRef, (doc) => {


      var collectionInfo = doc.data().globalData
     

      
        
        console.log(collectionInfo)
        itemlist()

        
        
        document.querySelector("#submit").addEventListener("click", function(){
            var item = document.querySelector("#todo")
            console.log(item.value)
        collectionInfo.push(item.value)
        var list = document.createElement("li")
        list.innerHTML = item.value
        document.querySelector(".listnames").appendChild(list)

         
        document.querySelector(".items").addEventListener('submit', (e) => {
            e.preventDefault()



  setDoc(docRef, {globalData: collectionInfo })

  .then(() => {

    console.log('user added data')

  })
  .catch(err => {
    console.log(err.message)
  })



  })

})

document.querySelector("#delete").addEventListener("click", function(){
  console.log("doyourwork")
collectionInfo.pop()
console.log(collectionInfo)

alert("Refresh to see removed element!")

document.querySelector(".remove").addEventListener('submit', (e) => {
  e.preventDefault()



setDoc(docRef, {globalData: collectionInfo })

.then(() => {

console.log('user added data')

})
.catch(err => {
console.log(err.message)
})



})

})

 function itemlist() {
   var lielements = document.querySelectorAll("li")
   lielements.forEach(function(lielement){
    //  lielement.innerHTML = ""
    parent.lielement.classList.toggle(listnames)
   })
   
   for(var i = 0; i < collectionInfo.length; i++) {
     
     var lists = document.createElement("li")
     lists.innerHTML = collectionInfo[i]
     document.querySelector(".listnames").appendChild(lists)
   }


   }

    })
    
    })



