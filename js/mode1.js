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

// START BUTTON
document.querySelector('.game__start-btn').addEventListener('click', start);
document.querySelector('.game__start-btn').addEventListener('click', () => {
    document.querySelectorAll('.game__buttons_btn').forEach((e) => {
        e.disabled = false;
    });
});

let onoff = true;
let timer = 0;

function start() {
    if (onoff == true) {
        const game__random = document.querySelector('.game__random');

        game__random.innerHTML = option[timer].html;
        timer++;
        if (timer > 2) {
            timer = 0;
        }
        setTimeout(() => {
            start()
        }, 150);
    }
}

//  OPTION-BUTTONS
document.querySelectorAll('.game__buttons_btn').forEach((e) => {
    e.disabled = true;
    e.addEventListener('click', (e) => {
        disableBtn();
        const btnType = e.currentTarget.dataset.btnType;
        const type = document.querySelector('.game__random i');
        // validation
        if (btnType == 'rock' && type.dataset.type == 'rock') {
            drawPopUp();
        } else if (btnType == 'rock' && type.dataset.type == 'paper') {
            losePopUp()
        }
        else if (btnType == 'rock' && type.dataset.type == 'scissors') {
            winPopUp()
        }
        if (btnType == 'paper' && type.dataset.type == 'rock') {
            winPopUp()
        } else if (btnType == 'paper' && type.dataset.type == 'paper') {
            drawPopUp();
        }
        else if (btnType == 'paper' && type.dataset.type == 'scissors') {
            losePopUp()
        }
        if (btnType == 'scissors' && type.dataset.type == 'rock') {
            losePopUp()
        } else if (btnType == 'scissors' && type.dataset.type == 'paper') {
            winPopUp()
        }
        else if (btnType == 'scissors' && type.dataset.type == 'scissors') {
            drawPopUp();
        }
    })
});

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
function disableBtn() {
    document.querySelectorAll('.game__buttons_btn').forEach((e) => {
        e.disabled = true;
    })
}