let leftDiv = document.querySelector(".left");
let float_lft = document.querySelector(".float-lft");

// Cards
let card1 = document.querySelector("#card1");

leftDiv.addEventListener("mousemove", () => {
    float_lft.style.right = "-90%";
    // Method2
    // card1.style.transform = "rotateY(-30deg) translateX(-110%)";
    // Method1
    card1.style.transform = "perspective(1000px) rotateY(-30deg) translateX(-110%)";
});

leftDiv.addEventListener("mouseleave", () => {
    float_lft.style.right = "-150%"
    // Method2
    // card1.style.transform = "rotateY(0deg) translateX(0%)";
    // Method 1
    card1.style.transform = "perspective(1000px) rotateY(0deg) translateX(0%)";
});


let rightDiv = document.querySelector(".right");
let float_rght = document.querySelector(".float-rght");
rightDiv.addEventListener("mousemove", () => {
    float_rght.style.left = "-90%";
    // Method2
    // card1.style.transform = "rotateY(30deg) translateX(110%)";
    // Method1
    card1.style.transform = "perspective(1000px) rotateY(30deg) translateX(110%)";
});

rightDiv.addEventListener("mouseleave", () => {
    float_rght.style.left = "-150%"
    // Moethod2
    // card1.style.transform = "rotateY(0deg) translateX(0%)";
    // Method1
    card1.style.transform = "perspective(1000px) rotateY(0deg) translateX(0%)";
});




