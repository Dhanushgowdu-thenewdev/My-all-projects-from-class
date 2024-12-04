let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "green", "purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false){
        console.log("Game is started");
        started = true;
        levelup ();
    }
});

function levelup () {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    //random btn ni choose chestundi

    let randIdx = Math.floor(Math.random() * btns.length); //This is used to generate random numbers, so that it can refledct colors.
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);  //Accessing the btn of color class.
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);

    
//Tackling the arrayss.

    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);

}



function checkAns(idx) {


    if (userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length === gameSeq.length) {
            setTimeout(levelup, 1000);
        }
    } else {
        h2.innerHTML = `Game over! Your score was <b> ${level}</b> <br> Press any key to restart the game`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);

        reset();
    }
}



function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 200);
}



function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 200);
}



//Adding additional event listeners to the game.
function btnPress() {
    let btn = this;
    userFlash(btn);

    
//Tackling the arrayss.
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);


    checkAns(userSeq.length-1); //Tracking the level we are on..
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click", btnPress);

}


function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;

}