function TestPassword() {
    let password = document.getElementById("text").value;
    let result = document.getElementById("passwordResult");

    if (password.length === 0) {
        result.textContent = "A senha não pode estar vazia.";
        result.style.color = "red";
    } else if (password.length < 6) {
        result.textContent = "Senha muito curta. Deve ter pelo menos 6 caracteres.";
        result.style.color = "orange";
    } else if (!/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
        result.textContent = "Senha fraca. Deve conter letras maiúsculas, minúsculas e números.";
        result.style.color = "orange";
    } else {
        result.textContent = "Senha forte.";
        result.style.color = "green";
    }
}

function cleanPassword() {
    document.getElementById("text").value = "";
    document.getElementById("passwordResult").textContent = "";
}