let yourScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const usc = document.querySelector("#user-score");
const csc = document.querySelector("#comp-score");
const compGenChoice = () =>{
    const options = ["rock","paper","scissors"];
    let ranIdx=Math.floor(Math.random()*3);
    return options[ranIdx];
}
const drawGame = () =>{
    msg.innerText="Game was draw :-)";
    msg.style.backgroundColor="#F08080";
}
const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        yourScore++;
        usc.innerText=yourScore;
        msg.innerText=`you win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="Green";
    }
    else{
        compScore++;
        csc.innerText=compScore;
        msg.innerText=`you lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="Red";
    }
}
const playGame = (userChoice)=>{
    console.log("user choice = ",userChoice);
    const compChoice = compGenChoice();
    console.log("comp choice = ",compChoice);
    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
    if(userChoice==="rock"){
        userWin = compChoice==="paper" ? false : true;
    }
    else if(userChoice==="paper"){
        userWin = compChoice==="scissors" ? false : true;
    }
    else{
        userWin = compChoice==="rock" ? false : true;
    }
    showWinner(userWin,userChoice,compChoice);
}
};
choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})