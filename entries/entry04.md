# Entry 4
##### 3/21/22


### Where I'm at for the Freedom Project: 

### The website:

I have completed my login page that the users would see to enter their username and password. I have also created a separate page that contains the actual to-do list and that's 70 percent finished. 


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
 
 
 ### Conflicts: 
 
The problems I am facing currently is that I can get the data the user inputs on the login page, however, the user can't input the same information to login. I am currently trying to solve this problem by going back to the google [firebase](firebase.google.com) website. 



### Engineering Design Process: 

Currently where I'm at in the Engineering Design process is that I am testing different codes to try and solve my conflict. In order to solve my problem  I am also researching as well. I am also designing and finalizing the website page. 


### Skills: 


I have gained lots of skills throughout my testing and research process. Some skills that I have gained throughout this period is trial and error as well as using the console to my advantage. I get lots of errors and I am starting to get used to the console so I can find where exactly is the problem in the lines of code. 
 


Text

[Previous](entry03.md) | [Next](entry05.md)

[Home](../README.md)
