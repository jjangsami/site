"use strict"

const id = document.querySelector("#id"),
 pasword = document.querySelector("#psword"),
loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        pasword: pasword.value,     
    };

    fetch("/login", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(req)
    })
}