
let choices = ["rock", "paper", "scissors"];
let playerId = document.getElementById("playername");
let playerScore = document.getElementById("playerscore");
let computerScore = document.getElementById("computerscore");
let winner = document.getElementById("winner");
let compSelection = document.getElementById('computerchoice');
let started = false;
let playerScoreNum = 0;
let compScoreNum = 0;
let pRock = document.getElementById("playerrock");
let pPaper = document.getElementById("playerpaper");
let pScissors = document.getElementById("playerscissors");
let user = document.getElementById("username");
user.maxLength = 10;
function startGame (playerChoice){
        if(started){
                return;
        }
        winner.style.visibility = 'hidden';
        compSelection.style.visibility = 'hidden';
        started = true ;
        let playerSelection =document.getElementById("playerchoice");
        if (playerChoice == "rock") {
          playerSelection.src = "assets/images/fist.png";
        }else if (playerChoice == "paper") {
         playerSelection.src = "assets/images/paper.png";
        }else if (playerChoice =="scissors") {
         playerSelection.src = "assets/images/scissors.png";
        }
        playerSelection.style.visibility = 'visible';

        

        setTimeout(function(){    
        let computerChoice = choices[Math.floor(Math.random() * 3)];
        console.log(computerChoice);

        
        if (computerChoice == "rock") {
        compSelection.src = "assets/images/fist.png";
        }else if (computerChoice == "paper") {
        compSelection.src = "assets/images/paper.png";
        }else if (computerChoice =="scissors") {
        compSelection.src = "assets/images/scissors.png";
        }
        compSelection.style.visibility = 'visible';
        
        let result="";
        if (playerChoice === computerChoice){
                result = draw();
                
        
        }else {
                switch(playerChoice){
                        case "rock": result = (computerChoice === "scissors") ? win() : lose();
                        break;
                        case "paper": result = (computerChoice === "rock") ? win() : lose();
                        break;
                        case "scissors": result = (computerChoice === "paper") ? win() : lose();
                        break;
                }

        }
        
        
}, 1000);
}



function win(){
        
        setTimeout(() =>{

        winner.style.visibility = 'visible';
        winner.src = "assets/images/win.png";
        started = false;
        document.getElementById("playerscore").innerText = ++playerScoreNum;
        if (playerScoreNum === 10){
                resetScore();
                alert("YOU WIN");
                
        }},1000)
       
}

function lose(){
        setTimeout(() =>{
        winner.style.visibility = 'visible';
       winner.src = "assets/images/lose.png";
       started = false;
        document.getElementById("computerscore").innerText = ++compScoreNum;
        if (compScoreNum === 10){
                resetScore();
                alert("YOU LOSE");
        }},1000)
        
}
function resetScore(){
        document.getElementById("playerscore").innerText = "0";
        document.getElementById("computerscore").innerText = "0";
        playerScoreNum = 0;
        compScoreNum = 0;
        
}
function draw(){
        setTimeout(() =>{
        winner.style.visibility = 'visible';
        winner.src = "assets/images/draw.png";
        started = false;
},1000);

}

function onSubmit(){
        
        
        let userName = user.value;
        document.getElementById("playername").innerHTML = playername;
        playername.textContent = userName;
        document.getElementById("username").value = "";

}
let submitButton = document.getElementById('submit');
submit.addEventListener('click', onSubmit);

function mouseonr(){
        pRock.style.width = "200px";
        pRock.style.height = "200px";
}
function mouseonp(){
        pPaper.style.width = "200px";
        pPaper.style.height = "200px";
}
function mouseons(){
        pScissors.style.width = "200px";
        pScissors.style.height = "200px";
}
function mouseoffr(){
        pRock.style.width = "75px";
        pRock.style.height = "75px";
}
function mouseoffs(){
        pScissors.style.width = "75px";
        pScissors.style.height = "75px";
}
function mouseoffp(){
        pPaper.style.width = "75px";
        pPaper.style.height = "75px";
}