const users = [
    { username: "user1", password: "pass1" },
    { username: "user2", password: "pass2" },
    { username: "user3", password: "pass3" },
    { username: "user4", password: "pass4" },
    { username: "user5", password: "pass5" },
    { username: "user6", password: "pass6" },
    { username: "user7", password: "pass7" },
    { username: "user8", password: "pass8" },
    { username: "user9", password: "pass9" },
    { username: "user10", password: "pass10" },
];

// Store users in local storage if not already set
if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify(users));
}

function login() {
    let username = document.getElementById("login-username").value;
    let password = document.getElementById("login-password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let validUser = users.find(user => user.username === username && user.password === password);

    if (validUser) {
        alert("Login successful!");
        localStorage.setItem("currentUser", username); // Store current user
        window.location.href = "home.html"; // Redirect to home page
    } else {
        alert("Invalid username or password");
    }
}

function checkLogin() {
    let currentUser = localStorage.getItem("currentUser");
    if (!currentUser) {
        alert("Please login first!");
        window.location.href = "login.html";
    }
}
