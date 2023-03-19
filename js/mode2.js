const option = [
    {
        name: 'rock',
        html: '<i class="fa-solid fa-hand-back-fist" data-type="rock"></i>'
    },
    {
        name: 'paper',
        html: '<i class="fa-solid fa-hand" data-type="paper"></i>'
    },
    {
        name: 'scissors',
        html: '<i class="fa-solid fa-hand-scissors" data-type="scissors"></i>'
    }
]
// DISABLE START BUTTON AND LISTENING CLICK EVENT
const startBtn = document.querySelector('.game__start-btn');
startBtn.disabled = true;
startBtn.addEventListener('click', start);

// ITEM SELECTION
let gameBtn = document.querySelectorAll('.game__buttons_btn');
let choice;

gameBtn.forEach(e => {
    e.addEventListener('click', e => {
        choice = e.currentTarget.dataset.btnType;
        startBtn.disabled = false;

        // CHANGE SELECTED OPTION
        const choiceBox = document.querySelector('.game__icons-box_choice');
        if (choice == 'rock') {
            choiceBox.innerHTML = option[0].html;
        } else if (choice == 'paper') {
            choiceBox.innerHTML = option[1].html;
        } else if (choice == 'scissors') {
            choiceBox.innerHTML = option[2].html;
        }
    })
});

// START
function start() {
    randomChoice();
    // WIN VALIDATION
    const type = document.querySelector('.game__icons-box_random i');
    if (choice == 'rock' && type.dataset.type == 'rock') {
        drawPopUp();
    } else if (choice == 'rock' && type.dataset.type == 'paper') {
        losePopUp()
    }
    else if (choice == 'rock' && type.dataset.type == 'scissors') {
        winPopUp()
    }
    if (choice == 'paper' && type.dataset.type == 'rock') {
        winPopUp()
    } else if (choice == 'paper' && type.dataset.type == 'paper') {
        drawPopUp();
    }
    else if (choice == 'paper' && type.dataset.type == 'scissors') {
        losePopUp()
    }
    if (choice == 'scissors' && type.dataset.type == 'rock') {
        losePopUp()
    } else if (choice == 'scissors' && type.dataset.type == 'paper') {
        winPopUp()
    }
    else if (choice == 'scissors' && type.dataset.type == 'scissors') {
        drawPopUp();
    }

    // DISABLE START BUTTON
    startBtn.disabled = true;
}

// RANDOM CHOICE
let selectionDraw = Math.floor(Math.random() * 3);
let lastSelectionDraw;
function randomChoice() {
    const randomBox = document.querySelector('.game__icons-box_random');
    if (lastSelectionDraw == selectionDraw) {
        selectionDraw = Math.floor(Math.random() * 3);
    }
    console.log(selectionDraw);
    randomBox.innerHTML = option[selectionDraw].html;
    lastSelectionDraw = selectionDraw;
}

// POPUPS
function winPopUp() {
    const win = document.querySelector('.win');
    win.classList.toggle('win--isActive');
    onoff = false;
    setTimeout(() => {
        win.classList.toggle('win--isActive');
        onoff = true;
    }, 2000)
}
function losePopUp() {
    const lose = document.querySelector('.lose');
    lose.classList.toggle('lose--isActive');
    onoff = false;
    setTimeout(() => {
        lose.classList.toggle('lose--isActive');
        onoff = true;
    }, 2000)
}
function drawPopUp() {
    const draw = document.querySelector('.draw');
    draw.classList.toggle('draw--isActive');
    onoff = false;
    setTimeout(() => {
        draw.classList.toggle('draw--isActive');
        onoff = true;
    }, 2000)
}