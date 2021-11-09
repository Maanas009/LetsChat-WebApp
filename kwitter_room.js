
const firebaseConfig = {
      apiKey: "AIzaSyAE3-YNW8HHVQCj-AjXXCN3qTPe5T8u_is",
      authDomain: "miliea.firebaseapp.com",
      databaseURL: "https://miliea-default-rtdb.firebaseio.com",
      projectId: "miliea",
      storageBucket: "miliea.appspot.com",
      messagingSenderId: "756980032567",
      appId: "1:756980032567:web:c6fe1403a381a8e13a8bb2"
    };
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
