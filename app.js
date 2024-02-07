const colors = ["green", "red", "rgb(80, 187, 236)", "#5786f4"];

const bnt = document.querySelector(".bnt_here");
const color = document.getElementById("color");

bnt.addEventListener('click', () => {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length)
};

