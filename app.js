const ansfirst = document.querySelector("#oneBtn");
const anssecond = document.querySelector("#twoBtn");
const ansthird = document.querySelector("#threeBtn");

const ansone = document.querySelector(".ansone");
const anstwo = document.querySelector(".anstwo");
const ansthree = document.querySelector(".ansthree");


ansfirst.addEventListener("click", function(){
    ansone.classList.toggle("openansone");
    anstwo.classList.remove("openanstwo");
    ansthree.classList.remove("openansthree");
});


anssecond.addEventListener("click", function(){
    anstwo.classList.toggle("openanstwo");
    ansone.classList.remove("openansone");
    ansthree.classList.remove("openansthree");
});

ansthird.addEventListener("click", function(){
    ansthree.classList.toggle("openansthree");
    ansone.classList.remove("openansone");
    anstwo.classList.remove("openanstwo");
});
