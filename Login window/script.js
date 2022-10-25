class LogInWin {
    construct(emailInput, passwordInput) {
        self.emailInput = emailInput
        self.passwordInput = passwordInput
    }

    getInput() {
        let email = String(emailInput.value)
        let password = String(passwordInput.value)
        emailInput.value = ""
        passwordInput.value = ""

        console.log("Email: " + email + "\nPassword: " + password)
    }

    swapVisibility() {
        if (passwordInput.type == "text") passwordInput.type = "password"
        else passwordInput.type = "text"
    }
}

const emailInput = document.getElementById("email")
const passwordInput = document.getElementById("password")

let logInWin = new LogInWin
