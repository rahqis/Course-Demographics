document
this.document

let emails = []
let profile = []
let accounts = []

const addEmail = (ev) => {
    var emailExists = false
    ev.preventDefault();
    let email = {
        onyen: document.getElementById("onyen").value,
        inputGroupSelect: document.getElementById("inputGroupSelect").innerHTML
    }
    email = onyen + "@" + inputGroupSelect
    for (var i = 0; i < emails.length; i++) {
        if (email === emails[i])
            emailExists = true
    }
    if (!emailExists) {
        emails.push(email)
    } else {
        alert("Email already exists, please use a different email address.")
    }

    document.querySelector('form').reset()
}

const addAccount = (ev) => {

}
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("signup").addEventListener("click", addEmail);
});