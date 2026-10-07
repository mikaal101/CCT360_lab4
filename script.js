let stage = 0;

let leftbutton = document.getElementById("leftbutton");
let rightbutton = document.getElementById("rightbutton");

let question = document.getElementById("question");

function leftbuttonclicked() {
    stage++;
    if (stage === 1) {
        question.innerHTML = "Which type of Chocolate?";
        leftbutton.innerText = "Creamy";
        rightbutton.innerText = "Crunchy";
    }
}

function rightbuttonclicked() {
    buttonright = False;
}

leftbutton.addEventListener("click", leftbuttonclicked);
rightbutton.addEventListener("click", rightbuttonclicked);
