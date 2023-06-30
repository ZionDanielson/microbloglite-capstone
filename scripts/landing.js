"use strict";
//variables
const loginForm = document.getElementById("login");
const loginUsername = document.getElementById("loginUsername");
const loginPassword = document.getElementById("loginPassword");
const submitBtn = document.getElementById("submitBtn");


submitBtn.onclick = function (event) {
    // Prevent the form from refreshing the page,
    // as it will do by default when the Submit event is triggered:
    event.preventDefault();

    // We can use loginForm.username (for example) to access
    // the input element in the form which has the ID of "username".

    const loginData = {         
        username: loginUsername.value,
        password: loginPassword.value,
    };


    // calls function from auth.js
    let loginResult = login(loginData); //logindata contains users input in the fields
    console.log(loginResult);           // initaties login process

    
};
