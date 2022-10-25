function clearInput() {
    document.getElementsByClassName("enterEmail")[0].value = "";
}

function getInput() {
    let email = document.getElementsByClassName("enterEmail")[0].value;
    console.log("Getting Input: " + email);
    document.getElementsByClassName("text")[0].innerHTML = email;
}

function onEvent(event) {
    if (event.key === "Enter") getInput();
}
