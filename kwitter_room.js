user_namevar = localStorage.getItem("user_name");

console.log(user_namevar);

document.getElementById("user_name-display").innerHTML = user_namevar;
































var firebaseConfig = {
  apiKey: "AIzaSyCm1aLgkOWdO7AJ7SKgN14_-oZ2HTxhLY0",
  authDomain: "kwitter-27fef.firebaseapp.com",
  databaseURL: "https://kwitter-27fef-default-rtdb.firebaseio.com",
  projectId: "kwitter-27fef",
  storageBucket: "kwitter-27fef.appspot.com",
  messagingSenderId: "512867216809",
  appId: "1:512867216809:web:6b391eaf3a2b60a1e6e8b8"
};
// Initialize Firebase
App.initializeApp(firebaseConfig);


  function addroom() {
    room_name = document.getElementById("room_name").value;
    localStorage.setItem("room_name", room_name);
    console.log(room_name);
    firebase.database().ref("/").child(room_name).update({
      purpose :"adding room name"
    });
    window.location = "kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log(Room_names);
row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirect(this.id)'>#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
//End code
});});}
getData();

function redirect(room_name1) {
  localStorage.setItem("room_name", room_name1);
  console.log(room_name1);
  firebase.database().ref("/").child(room_name1).update({
    purpose :"adding room name"
  });
  window.location = "kwitter_page.html";
}