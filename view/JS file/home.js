function validateTextbox() {

    var box = document.getElementById("name");
    var box2 = document.getElementById("address");
    var box3 = document.getElementById("phone");
    var box4 = document.getElementById("email");

    if (box.value && box2.value && box3.value.length == 10 && box4.value) {
        return true;
    }
    else {
        alert("Please enter all the fields and phone number has to be 10 characters long.");
        box.focus();
        return false;
    }
}