var fName = document.getElementById("fName")
var lName = document.getElementById("lName")
let onyen = document.getElementById("onyen")
let domain = document.getElementById("inputGroupSelect")
var password = document.getElementById("password")
var cPassword = document.getElementById("cPassword")
var signup = document.getElementById("signup")

var email;

function getDomain() {
    domain = $("#inputGroupSelect option:selected").val();
    return domain
}

function getOnyen() {
    onyen = $("#onyen").val()
    return onyen
}

function createEmail() {
    console.log(getDomain());
    console.log(getOnyen());

    email = onyen + "@" + domain

    console.log(email)
}