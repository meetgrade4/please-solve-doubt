function add() {
    user_name = document.getElementById("user_name").value;
    user_name.replace(" ", "_");
    var length = user_name.length;
    if(length > 10){
        document.getElementById("user_name").placeholder = "too long";
        document.getElementById("user_name").value = "";
    }
    else{
        if(length < 5){
            document.getElementById("user_name").placeholder = "too short";
            document.getElementById("user_name").value = ""; 
        }
        else{
            final();
        }
    }
}



function final() {
    var user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
}