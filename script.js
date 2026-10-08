let leftbutton = document.getElementById("leftbutton");
let rightbutton = document.getElementById("rightbutton");

let question = document.getElementById("question");

let stage = 0;
let category = '';
let type = '';
let ending = false;

function leftbuttonclicked() {

    if (ending == true) {
        document.location.reload();
    }

    if (stage == 0) {
        question.innerHTML = "Which type of chocolate?";
        leftbutton.innerText = "Creamy";
        rightbutton.innerText = "Crunchy";
        category = 'chocolate';
        stage = 1;
    } else if (stage == 1 && category == 'chocolate') {
        type = 'creamy';
        question.innerHTML = "Which brand of creamy chocolate?";
        leftbutton.innerText = "Kinder";
        rightbutton.innerText = "Mars";
        stage = 2;
    } else if (stage == 2 && type == 'creamy') {
        question.innerHTML = "Nice choice! Kinder buenoooooo."
        leftbutton.innerText = 'Restart'
        rightbutton.style.display = 'none';
        ending = true;
    } else if (stage == 1 && category == 'chips') {
        type = 'corn';
        question.innerHTML = "Which brand of corn chips?";
        leftbutton.innerText = "Cheetos";
        rightbutton.innerText = "Doritos";
        stage = 2;
    } else if (stage == 2 && type == 'corn') {
        question.innerHTML = "Nice choice! Flaming Hot Cheetos are my favorite!"
        leftbutton.innerText = 'reload'
        rightbutton.style.display = 'none';
        ending = true;
    } else if (stage == 2 && type == 'potato') {
        question.innerHTML = "Nice choice! Lays is simple and classic."
        leftbutton.innerText = 'reload'
        rightbutton.style.display = 'none';
        ending = true;
    } else if (stage == 2 && type == 'crunchy') {
        question.innerHTML = "Nice choice! a famous wafer crunch!"
        leftbutton.innerText = 'reload'
        rightbutton.style.display = 'none';
        ending = true;
    }
}

function rightbuttonclicked() {
    if (stage == 0) {
        question.innerHTML = "Which type of chips?";
        leftbutton.innerText = "Corn";
        rightbutton.innerText = "Potato";
        category = 'chips';
        stage = 1;
    } else if (stage == 1 && category == 'chips') {
        type = 'potato';
        question.innerHTML = "Which brand of potato chips?";
        leftbutton.innerText = "Lays";
        rightbutton.innerText = "Pringles";
        stage = 2;
    } else if (stage == 2 && type == 'potato') {
        question.innerHTML = "Nice choice! can't go wrong with Pringles."
        leftbutton.innerText = 'reload'
        rightbutton.style.display = 'none';
        ending = true;
    } else if (stage == 1 && category == 'chocolate') {
        type = 'crunchy';
        question.innerHTML = "Which brand of crunchy chocolate?";
        leftbutton.innerText = "KitKat";
        rightbutton.innerText = "Snickers";
        stage = 2;
    } else if (stage == 2 && type == 'crunchy') {
        question.innerHTML = "Nice choice! snickers are the best!"
        leftbutton.innerText = 'reload'
        rightbutton.style.display = 'none';
        ending = true;
    } else if (stage == 2 && type == 'creamy') {
        question.innerHTML = "Nice choice! carmel creamy sensation!"
        leftbutton.innerText = 'reload'
        rightbutton.style.display = 'none';
        ending = true;
    } else if (stage == 2 && type == 'corn') {
        question.innerHTML = "Nice choice! the most famous edible triangles!"
        leftbutton.innerText = 'reload'
        rightbutton.style.display = 'none';
        ending = true;
    }
}

leftbutton.addEventListener("click", leftbuttonclicked);
rightbutton.addEventListener("click", rightbuttonclicked);
