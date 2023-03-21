const firebaseConfig = {
  apiKey: "AIzaSyAV2G49DRHfjZqQm6GAmA_HqcI_SI2I2eo",
  authDomain: "classtest-a88df.firebaseapp.com",
  databaseURL: "https://classtest-a88df-default-rtdb.firebaseio.com",
  projectId: "classtest-a88df",
  storageBucket: "classtest-a88df.appspot.com",
  messagingSenderId: "570956855104",
  appId: "1:570956855104:web:7ad5e93627f1cca18deca5",
  measurementId: "G-XGM5EXCTD1"
};

function addRoom()
{
      room_name = document.getElementById("room_name").value;
  
      firebase.data().ref("/").child(room_name).update({
        purpose: "adding room name"
      });

      localStorage.setItem("room_name",room_name);

      window.location = "kwitter_room.html";
  }

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_room.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}