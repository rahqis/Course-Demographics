document
this.document

var fName = document.getElementById("fName");
var lName = document.getElementById("lName");
var onyen = document.getElementById("onyen");
var inputGroupSelect = document.getElementById("inputGroupSelect");
var password = document.getElementById("password");
var cPassword = document.getElementById("cPassword");
var signup = document.getElementById("signup");
var email;

function Profile(fName, lName, email, password) {
    this.fName = fName;
    this.lName = lName;
    this.email = email
    this.password = password
};

var accounts = [Profile];
fName.addEventListener("input", fName = InputEvent);
lName.addEventListener("input", lName = InputEvent);
onyen.addEventListener("input", onyen = InputEvent);
password.addEventListener("input", password = InputEvent);
cPassword.addEventListener('input', cPassword = InputEvent);

function storeFirst() {
    fName = "input";
}


function createAddress(onyen, inputGroupSelect) {
    email = onyen + "@" + inputGroupSelect;
}
var emails = [email]

function checkMatch(password, cPassword) {
    if (password === cPassword && password != null) {

    } else {
        alert("Password and Password Confirmation Do Not Match!");
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
    emails.push = createAddress(onyen, inputGroupSelect);
    var p = new Profile(fName, lName, email, password);
    accounts.push = p;
}

signup.addEventListener("clicked", assureSignUp(fName, lName, onyen, inputGroupSelect, password, cPassword));