document.getElementById("loginform").addEventListener("submit", function(event) {
    event.preventDefault();
    const user = document.getElementById("user").value;
    const password = document.getElementById("password").value;
    const message= document.getElementById("message");

    if (user === "user" && password === "1234") {
        message.textContent = "tudo certo meu nobre";
        message.style.color = "green";
    } else {
        message.textContent = "tá estranho isso aí";
        message.style.color = "red";
    }
});