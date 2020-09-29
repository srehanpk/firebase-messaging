import React from 'react';
import './App.css';
import firebase from './firebase';


function App() {

  const messaging = firebase.messaging();

  Notification.requestPermission().then(()=>{
    return messaging.getToken()
  }).then((token)=>{
    console.log(`token`, token);
    alert("Token" + token)
    //document.write(token);
  })


  return (
    <div className="App">
      <h1>Hello World </h1>
    </div>
  );
}

export default App;
