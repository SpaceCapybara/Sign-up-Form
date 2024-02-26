document.addEventListener('DOMContentLoaded', ()=> {
let password = document.querySelector("#password").value

let confirmPassword = document.querySelector("#confirmPassword").value

let errorMsg = document.querySelector("#error")

if (password == "" && confirmPassword == "") {
    errorMsg.textContent = "*Password do not match"
} else if (password == confirmPassword) {
    errorMsg.textContent = ""
}
})
