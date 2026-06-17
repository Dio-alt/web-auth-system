function getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
}

function saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
}

function register() {
    const user = document.getElementById("registerUser").value;
    const pass = document.getElementById("registerPass").value;

    let users = getUsers();

    if (users.find(u => u.user === user)) {
        document.getElementById("registerMsg").innerText = "Usuario ja existe";
        return;
    }

    users.push({ user, pass });
    saveUsers(users);

    document.getElementById("registerMsg").innerText = "Cadastro realizado";

    setTimeout(() => {
        window.location.href = "index.html";
    }, 1000);
}

function login() {
    const user = document.getElementById("loginUser").value;
    const pass = document.getElementById("loginPass").value;

    let users = getUsers();

    const valid = users.find(u => u.user === user && u.pass === pass);

    if (valid) {
        localStorage.setItem("loggedUser", user);
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("loginError").innerText = "Login invalido";
    }
}

function logout() {
    localStorage.removeItem("loggedUser");
    window.location.href = "index.html";
}

function loadDashboard() {
    const user = localStorage.getItem("loggedUser");

    if (!user) {
        window.location.href = "index.html";
        return;
    }

    document.getElementById("welcome").innerText = "Bem-vindo, " + user;
}