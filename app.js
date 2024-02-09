let userScore=0;
let compScore =0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#message");
const userscoreid = document.querySelector("#user-score");
const compscoreid = document.querySelector("#comp-score");

const genCompChoice=()=>{
   const options = ["rock","paper","scissors"];
   const randIdx = Math.floor(Math.random()*3);
   return options[randIdx];
};
const showWinner = (userWin,compChoice,userChoice)=>{
    if(userWin)
    {
       userScore++;
       userscoreid.innerText = `${userScore}`;
        msg.innerText = `You win:) Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
      
    }
    else
    {
        compScore++;
        compscoreid.innerText = `${compScore}`;
        msg.innerText = `You lost:( Computer's ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
   
}
const playGame =(userChoice)=>{
   const compChoice = genCompChoice();
  
   if(userChoice===compChoice)
   {
    
     msg.innerText = "Game Drawn.Play Again!!"
     msg.style.backgroundColor = "darkorchid";
   }
   else{
    let userWin= true;
       if(userChoice==="rock"){
        usereWin = compChoice==="paper"?false:true;
       }
       else if(userChoice==="scissors"){
        userWin = compChoice==="rock"?false:true;
       }
       else{
        userWin = compChoice== "scissors"?false:true;
       }
       showWinner(userWin,compChoice,userChoice);
   }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
       
      const userChoice = choice.getAttribute("id");
      playGame(userChoice);
    });

});