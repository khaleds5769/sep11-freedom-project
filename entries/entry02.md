# Entry 2
##### 12/19/21

In the process of learning firebase, I am learning new things as I go on the internet. I created an account on [firebase.google.com](https://firebase.google.com/docs/web/setup) and created a project on it. I named my project `my-to-do-list`. I also learned that you would need to download a `configuration` and a `cdn` on an ide which I did do. 

I watched a couple of [youtube](https://www.youtube.com/watch?v=rQvOAnNvcNQ&t=158s) videos that explained the initial [setup](https://youtu.be/9kRgVxULbag) for firebase and how to get started with firebase. 

### Skills: 

Some `skills` I developed since the last blog entry are that I am now more focused on the fundaments of firebase and another skill I developed is being able to understand some of the things I am looking at. The first time I looked at some of the code and just the basics I was overwhelmed with the way everything looked. 

### Engineering Design Process: 

Currently where I am at in the `Engineering Design Process ` is, I am researching, asking, and creating. I still need a little more research before digging deep into firebase. I am trying to take code to test and see what each code does/means. 

















### This is the config/CDN: 


```js
<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
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
  const analytics = getAnalytics(app);
</script>

```


[Previous](entry01.md) | [Next](entry03.md)

[Home](../README.md)
