# Entry 4
##### 3/21/22


### Where I'm at for the Freedom Project: 

I learned to successfully recieve the user's input that they put in the login page. I have created a login page with a register button and they can input their username and password and I would be able to see it on the backend. I was able to successfully do that by doing this: 

```js

import { getDatabase} from "firebase/firestore" //gets the database from the firestore

```

```js

const db = getDatabase()

var username = document.querySelector('#user')
var register = document.querySelector('#reg')
register.addEventListener("click", function(){
db.createCollection("username").add(username)

```
  


Text

[Previous](entry03.md) | [Next](entry05.md)

[Home](../README.md)
