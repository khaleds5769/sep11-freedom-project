# Entry 5
##### 4/25/22


## Progress: 

Wrapping up the Mvp was stressful because I got so many conflicts trying to arrive to the end. I needed to save what the user adds and deletes inside the Todo List.

## Logging in the User!


```js

loginForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const email = loginForm.userLog.value
  const password = loginForm.passLog.value

  signInWithEmailAndPassword(auth, email, password)
    .then(cred => {
      console.log('user logged in:', cred.user)
      loginForm.reset()
    })
    .catch(err => {
      console.log(err.message)
    })
})

```
I set two variables to hold my value for the username and password and then if the username and password match the ones on the firebase console, sign in the user and then reset the login input form. 


## Adding elements to my Todo list

```js

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
            
```

I am using what's getting sent to the firebase [console](https://console.firebase.google.com/u/0/project/my-to-do-list-fc7b1/firestore/data/~2Faccounts~2F0Kwj7SjaJuVvstBGiUBHZsAKSzg2) and saving it in a variable so that I could then push whatever the User inputs inside the input field. I'm then creating a list and finding the value of the list which is the inputs. This is all done when clicked on the button. 



## Removing items from my Todo List

```js
document.querySelector("#delete").addEventListener("click", function(){
collectionInfo.pop()
console.log(collectionInfo)

alert("Refresh to see removed element!")

document.querySelector(".remove").addEventListener('submit', (e) => {
  e.preventDefault()

```

I am now using the same variable `collectionInfo` to pop an input. This helps the user remove something they added. 


## Engineering Design Process: 

Currently where I'm at in the [Engineering Design Process](https://hstatsep.github.io/students/#edp) is a mix of testing and improving. I am testing different things that may work and I am constantly trying to improve on things that could be improved on. This is an MVP so I believe there's still lots of improvement needed. 


## Skills: 

I have gained lots of skills throughout this whole process. I have gained the skill of patience and trial and error. I have gained the skill to research online as well as communication. I had difficulties and I needed some understanding and this made me ask questions. 





[Previous](entry04.md) | [Next](entry06.md)

[Home](../README.md)
