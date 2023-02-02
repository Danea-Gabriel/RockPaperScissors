const possibilities = ['rock', 'paper', 'scissors'];
let userScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector('#rock-choosed');
const paperBtn = document.querySelector('#paper-choosed');
const scissorsBtn = document.querySelector('#scissors-choosed');
const userCurentScore = document.querySelector('#user-score');
const computerCurentScore = document.querySelector('#computer-score');
const roundResult = document.querySelector('#result-for-the-round');
const showHandPlayer = document.querySelector('#card-score-player');
const showHandComputer = document.querySelector('#card-score-computer');
const telephone = document.querySelector('#telephone');
const audio = new Audio('cp77_call_tone.mp3');
telephone.style.visibility = 'hidden'; // de pus in css

const appendClassForComputer  = (computer) =>{
    if (computer === 'rock'){
        showHandComputer.className = 'showHand fa-regular fa-hand-back-fist ' ;
    }
    else if (computer === 'paper'){
        showHandComputer.className  = 'showHand fa-regular fa-hand ';
    }else{
        showHandComputer.className   = 'showHand fa-regular fa-hand-scissors ';

    }
}
const appendClassForPlayer = (player) =>{
    if (player === 'rock'){
        showHandPlayer.className = 'showHand fa-regular fa-hand-back-fist ' ;
    }
    else if (player === 'paper'){
        showHandPlayer.className  = 'showHand fa-regular fa-hand ';
    }else{
        showHandPlayer.className   = 'showHand fa-regular fa-hand-scissors ';

    }
}


const cheatHard = (computer, player)=>{
    if ( computer === 'rock'){
        player = 'paper';
        return player ;

    }
    else if ( computer === 'paper'){
        player = 'scissors';
        return player ;

    }
    else if ( computer === 'scissors'){
        player = 'rock';
        return player ;
}  
}
const checkWinner  = (player) => {
   let computer = possibilities[Math.floor(Math.random() * possibilities.length)];
   if(userScore+1 < computerScore){
    player = cheatHard(computer, player);

   }
   appendClassForComputer(computer);
   appendClassForPlayer(player);
    if(player =='rock' && computer ==='scissors'){
        return true;
        
    }
    else if (player =='paper' && computer ==='rock'){
        return true;
    }
    else if (player =='scissors' && computer ==='paper'){
        return true;
    }
    else if (player == computer) {
        return 'tie';
    }
    else return false;
}
const talkWithV = () =>{
  
    if (userScore+1 < computerScore){
       telephone.style.visibility = 'visible';
       audio.play();
   }
}

const play = (player) =>{
let check = checkWinner(player);
if (check === 'tie'){
   roundResult.textContent = " IT'S A TIE !";
    userScore +=0;
    computerScore +=0;

}
else if (check === true){
    roundResult.textContent = " YOU WIN!";
    userScore ++;
    userCurentScore.textContent = userScore;
}
else {
    roundResult.textContent = " YOU LOST!";
    computerScore ++;
    if(computerScore <=4){
    talkWithV();
    }
    computerCurentScore.textContent = computerScore;}
}





const checkBigWinner = () =>{
    if(userScore === 5){
        roundResult.textContent = "Congrats!!!";
        userScore = 0;
        computerScore = 0;
        userCurentScore.textContent = userScore;
        computerCurentScore.textContent = computerScore;
       
    }
    else if(computerScore ===5){
        roundResult.textContent = "Failure!!!";
        userScore = 0;
        computerScore = 0;
        userCurentScore.textContent = userScore;
        computerCurentScore.textContent = computerScore;
    }
}

telephone.addEventListener('click',function(){
audio.pause();
telephone.style.visibility = 'hidden';

});

rockBtn.addEventListener('click',function(){
play('rock');
checkBigWinner();

    
});
paperBtn.addEventListener('click',function(){
    play('paper');
checkBigWinner();


 
});
scissorsBtn.addEventListener('click',function(){
    play('scissors');
checkBigWinner();

});