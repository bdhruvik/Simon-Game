let gameSeq = [];
let userSeq = [];

let level = 0;
let highscore = 0;
let start = false;

let gameColorFlash = ["red","green","blue","pink"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function() {
    if(start == false) {
       console.log("game was started");
           start = true;
           levelUp();
    }
})

function gameFlash(btn) {
    btn.classList.add("white");
    setTimeout(function() {
        btn.classList.remove("white");
    },250);
}

function userFlash(btn) {
    btn.classList.add("black");
    setTimeout(function() {
        btn.classList.remove("black");
    },250);
}


function levelUp() {
    userSeq = [];
    
    level++;
    h2.innerText = `LEVEL: ${level}`;
    
    let randomInd = Math.floor(Math.random() * 4);
    let randomColor = gameColorFlash[randomInd];
    let randombtn = document.querySelector(`.${randomColor}`);
    // console.log(randomInd);
    // console.log(randomColor);
    // console.log(randombtn);

    gameSeq.push(randomColor);
    gameFlash(randombtn);
    // console.log(gameSeq);
    

}

function checkAns(ind) {

    // let ind = level-1;

    if(userSeq[ind] === gameSeq[ind]) {
        if(userSeq.length == gameSeq.length) {
            setTimeout(levelUp,1000)

        }
        }else {
            h2.innerHTML = `GAME OVER: <b>YOUR SCORE WAS ${level}</b><br>Press Any Key to start.`
            document.querySelector("body").style.backgroundColor = "yellow";
            setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";

            },150)
            if(level > highscore) {
                highscore = level;

            document.querySelector("#highscore").innerText = `${level}`;
            }
            start=false;
            level=0;
            reset();

    }

      
}

function btnPress() {
    // console.log(this);
    let btn = this;
    // console.log(btn);
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    // // console.log(userSeq);
    checkAns(userSeq.length-1);

}


let allbtn = document.querySelectorAll(".simon");

for(btn of allbtn) {
    btn.addEventListener("click",btnPress);
}

function reset() {
    start = false;
    level = 0;
    userSeq = [];
    gameSeq = [];
}