document.addEventListener("DOMContentLoaded", () => {

    const loginDiv = document.getElementById("login");
    const signupDiv = document.getElementById("signup");


    const signupLink = loginDiv.querySelector("a[href='#signup']");
    const loginLink = signupDiv.querySelector("a[href='#login']");


    // signupDiv.style.display = "none";


    signupLink.addEventListener("click", (event) => {
        event.preventDefault();
        loginDiv.style.display = "none";
        signupDiv.style.display = "block";
    });


    loginLink.addEventListener("click", (event) => {
        event.preventDefault();
        signupDiv.style.display = "none";
        loginDiv.style.display = "block";
    });
});
