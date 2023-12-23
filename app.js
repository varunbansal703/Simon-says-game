let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let btns = ["yellow","red","purple","green"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started == false){
        started = true;
        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randCol = btns[randIdx];
    let randBtn = document.querySelector(`.${randCol}`);
    gameSeq.push(randCol);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkBtn(idx){
    if(userSeq[idx] === gameSeq[idx]){
       if(userSeq.length == gameSeq.length){
        setTimeout(levelUp,1000);
       }
    }else{
        h2.innerHTML = `Game over! Your score was <b>${level}</b> <br>Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },250);
        reset();
    }
}

function btnpress(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkBtn(userSeq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
