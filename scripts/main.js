let randomArray = [];
let arrayEle = document.getElementById("array-size");
document.querySelector("#animation-speed").disabled = true;

//Initial array generated when site is opened
generateArray();

//Function to generate an array
function generateArray() {
    randomArray.length = 0;
    const bar = document.querySelector("#bars");
    let arraySize = arrayEle.value;
    bar.innerHTML = '';
    for (let i = 0; i < arraySize; i++) {
        randomArray.push(getRandomInt(5, 700));
    }
    const bars = document.querySelector("#bars");

    for (let i = 0; i < arraySize; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${randomArray[i] / 1.5}px`;
        bar.classList.add('bar');
        bar.classList.add('bar-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}

//Generates random numbers: [5,700]
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Swap function for sort algos
function swap(a, b) {
    let temp = a.style.height;
    a.style.height = b.style.height;
    b.style.height = temp;
}

//Updates generated array when array size is changed
arrayEle.addEventListener("input", generateArray);


//Stores all sorting array methods
const sortTypes = ["#insertion-sort", "#merge-sort", "#quick-sort", "#selection-sort", "#bubble-sort", "#shell-sort", "#heap-sort"]


//Disables everything except speed and the ongoing sorting algo
function disableInputs() {

    for (i in sortTypes) {
        document.querySelector(sortTypes[i]).disabled = true;
    }
    document.querySelector("#random-button").disabled = true;
    document.querySelector("#array-size").disabled = true;
    document.querySelector("#animation-speed").disabled = false;
}

//Enables all inputs
function enableInputs() {
    for (i in sortTypes) {
        document.querySelector(sortTypes[i]).disabled = false;
    }
    document.querySelector("#random-button").disabled = false;
    document.querySelector("#array-size").disabled = false;
    document.querySelector("#animation-speed").disabled = true;
}


let waitTime = 250;
function animate(milisec) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, milisec);
    })
}

let animespeed = document.getElementById("animation-speed");
animespeed.addEventListener("input", () => {

    waitTime = 250 / (parseInt(animespeed.value));
})