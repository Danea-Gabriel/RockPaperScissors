const possibilities = ['rock', 'paper', 'scissors'];
let userScore = 0;
let computerScore = 0;

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
//    if(userScore < computerScore){
//     player = cheatHard(computer, player);

//    }
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
    computerCurentScore.textContent = computerScore;}
}

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

const talkWithV = () =>{
    if (userScore === computerScore){
        telephone.style.visibility = 'hidden';
    }
    else if (userScore < computerScore+1){
        telephone.style.visibility = 'visible';
        audio.play();
    }
}

telephone.addEventListener('click',function(){
audio.pause();
telephone.style.visibility = 'hidden';

});
talkWithV();
rockBtn.addEventListener('click',function(){
    play('rock');
talkWithV();

    
});
paperBtn.addEventListener('click',function(){
    play('paper');
talkWithV();

 
});
scissorsBtn.addEventListener('click',function(){
    play('scissors');
talkWithV();

  
});