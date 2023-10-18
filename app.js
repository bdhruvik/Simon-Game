let gameSeq = [];
let userSeq = [];

let simonFlash = ["pink","blue","orange","navy"];

let Started = false;
let highscore = 0;
let level = 0;




let h3 = document.querySelector("h3");

document.addEventListener("keydown",function() {

    if(Started == false) {
        console.log("Siomon Game is Started");
        Started = true;

        levelUp();
    }
    

})

function gameFlash(btn) {
    btn.classList.add("white");
    setTimeout(function() {
        btn.classList.remove("white");
    }, 250);

}

function userFlash(btn) {
    btn.classList.add("green");
    setTimeout(function() {
        btn.classList.remove("green");
    },250);
}

function levelUp() {
    userSeq=[];
    level++;
    h3.innerText = `LEVEL ${level}`;
 
    let randomInd = Math.floor(Math.random()*3)+1;
    let randomColor = simonFlash[randomInd];
    let randombtn = document.querySelector(`.${randomColor}`);
    // console.log(randomInd);
    // console.log(randomColor);
    // console.log(randombtn);
    gameSeq.push(randomColor);
    console.log(gameSeq);

    gameFlash(randombtn);
}

function checkAns(ind) {
    // console.log("current level : ",level)
    // let ind = level-1;

    if(userSeq[ind] === gameSeq[ind]){
        // console.log("Same Value");
        if(userSeq.length == gameSeq.length) {
           setTimeout(levelUp,1000)
        }

    }else {
        h3.innerHTML = `GAME OVER!<b>your score was ${level}</b><br>  PRESS ANY KEY TO START.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        if(level > highscore) {
            highscore = level;
            let high = document.querySelector("span").innerText = `${level}`;
            console.log(high); 
        
        } 
        Started = false;
        level = 0;
        reset();
    }
}

function btnPress() {
    // console.log(this);
    let btn = this;
    userFlash(btn);
   let userColor  = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allbtn = document.querySelectorAll(".simon");
for(btn of allbtn) {
    btn.addEventListener("click",btnPress);
}

function reset() {
    Started = false;
    level = 0;
    userSeq = [];
    gameSeq = [];

}






