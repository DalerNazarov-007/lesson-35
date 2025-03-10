function register() {
    let username = document.getElementById("reg-username").value;
    let email = document.getElementById("reg-email").value;
    let password = document.getElementById("reg-password").value;

    if (username.trim() === "" || email.trim() === "" || password.trim() === "") {
        alert("Please fill in all fields");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let existingUser = users.find(user => user.username === username || user.email === email);
    if (existingUser) {
        alert("Username or email already exists");
        return;
    }
    users.push({ username, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful! You can now login.");
    window.location.href = "login.html";
}