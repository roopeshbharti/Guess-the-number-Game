"use strict";
/*
console.log(document.querySelector(".message"));
document.querySelector(".message").textContent = "Correct Number 🏆";
document.querySelector(".number").textContent = 10;
document.querySelector(".guess").value = 20;
console.log(document.querySelector(".guess").value);
*/

// check btn click -> input value -> capture

// function greeting() {
//     console.log("Hello world");
//     console.log(document.querySelector(".guess").value);
// }

let randomNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;

document.querySelector(".score").textContent = score;

// Check Button
document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);

    if (guess === 0) {
        document.querySelector(".message").textContent = "No Number 💥";
    } else if (guess === randomNumber) {
        document.querySelector(".number").textContent = randomNumber;
        document.querySelector(".message").textContent = "Correct Number 🏆";
        document.querySelector("body").style.backgroundColor = "green";
    } else if (guess > randomNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "Too High ☝️";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent =
                "Lost the Game! 🏴‍☠️";
            document.querySelector("body").style.backgroundColor = "red";

            document.querySelector(".score").textContent = 0;
        }
    } else if (guess < randomNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "Too Low 👇";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent =
                "Lost the Game! 🏴‍☠️";
            document.querySelector("body").style.backgroundColor = "red";

            document.querySelector(".score").textContent = 0;
        }
    }
});

// Restart Button
document.querySelector(".restart").addEventListener("click", function () {
    score = 20;
    randomNumber = Math.trunc(Math.random() * 20 + 1);
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    document.querySelector(".score").textContent = 20;
    document.querySelector(".message").textContent = "Start Guessing...";

    document.querySelector("body").style.backgroundColor = "#111";
});



// Modal 
// [when we click closs modal button it should add the hidden class from, modal div in html]

document.querySelector(".show-modal").addEventListener("click", () => {
    document.querySelector(".modal").classList.remove("hideen");
    document.querySelector(".background").classList.remove("hidden");
});

document.querySelector(".close-modal").addEventListener("click", () => {
document.querySelector(".modal").classList.add("hidden");
document.querySelector(".background").classList.add("hidden");
});

document.querySelector(".background").addEventListener("click", () => {
    document.querySelector(".modal").classList.add("hidden");
    document.querySelector(".background").classList.add("hidden");
});
