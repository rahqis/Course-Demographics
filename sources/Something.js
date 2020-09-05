document
this.#document

var fName = document.getElementById("fName");
var lName = document.getElementById("lName");
var onyen = document.getElementById("onyen");
var inputGroupSelect = document.getElementById("inputGroupSelect");
var password = document.getElementById("password");
var cPassword = document.getElementById("cPassword");
var signup = document.getElementById("signup");

var profile = {
    fName,
    lName,
    email,
    password
};
var accounts = [profile];
fName.addEventListener("input");
lName.addEventListener("input");
onyen.addEventListener("input");
password.addEventListener("input");
cPassword.addEventListener('input');

function createAddress(onyen, inputGroupSelect) {
    var email = onyen + "@" + inputGroupSelect;
}
var emails = [email]

function checkMatch() {
    if (password === cPassword && password != null) {

    } else {
        alert("Password and Password Confirmation Do Not Match!");
        break;
    }
}

function noEmailRepeats() {
    for (var i = 0; i < emails.length; i++) {
        if (email === emails[i]) {
            alert("Account already used with this email. Please use different email.");
            break;
        }
    }
}

function assureSignUp(fName, lName, onyen, inputGroupSelect, password, cPassword) {
    checkMatch;
    noEmailRepeats;
    profile.fName;
    profile.lName;
    emails.push = createAddress(onyen, inputGroupSelect);
    profile.password;

    accounts.push = profile;
}

signup.addEventListener("clicked", assureSignUp(fName, lName, onyen, inputGroupSelect, password, cPassword));