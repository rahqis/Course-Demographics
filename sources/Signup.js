var fName = document.getElementById("fName")
var lName = document.getElementById("lName")
var onyen = document.getElementById("onyen")
let address = document.getElementById("inputGroupSelect").innerHTML
var password = document.getElementById("password")
var cPassword = document.getElementById("cPassword")
var signup = document.getElementById("signup")

var email;

function getAddress() {
    address = address.value
}

function getOnyen() {
    onyen = onyen.value
}

function createEmail() {
    console.log(getAddress());
    console.log(getOnyen());

    email = onyen + "@" + address

    console.log(email)
}




$(document).ready(signup.addEventListener("click", createEmail()));