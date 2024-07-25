let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".pic");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user_score");
const compScorePara=document.querySelector("#comp_score");

const genComputerChoice=()=>{
    let opt=["rock","paper","scissor"];
    //computer Choice
    const randomInd=Math.floor(Math.random()*3);
    return opt[randomInd];
}
const draw=()=>{
    console.log("It's a Draw!");
    msg.innerText="It's a Draw! Play again";
    msg.style.backgroundColor = "rgb(139, 116, 1)";
    msg.style.color = "rgb(250, 255, 113)";
}
const gameWinner=(userWin,userChoice,compChoice)=>{
if(userWin){
 
    userscore++;
    userScorePara.innerText=userscore;
    msg.innerText=`You Win! ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "rgb(0, 60, 25)";
    msg.style.color = "rgb(124, 250, 198)";
}
else{
    compscore++;
    compScorePara.innerText=compscore;
  
    msg.innerText=`You Lost !! ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "rgb(143, 0, 0)";
    msg.style.color = "rgb(255, 209, 209)";
}
}
const playGame = (userChoice) =>{
    //user Choice
    console.log("User Choice =", userChoice);
    const compChoice=genComputerChoice();
    console.log("Computer Choice =", compChoice);
    if(userChoice===compChoice){
        //Draw
        draw();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            //computer will generate either paper or scissors
            userWin=compChoice==="paper" ?false:true;

        }
        else if(userChoice==="paper"){
            //computer will generate either rock or scissors
            userWin=compChoice==="scissor" ?false:true;
        }
        else{
            //computer will generate either rock or paper
            userWin=compChoice==="rock" ?false:true;
            
        }
   
        gameWinner(userWin,userChoice,compChoice);
    }

}
choices.forEach((pic) => {
    pic.addEventListener("click", () => {
        const userChoice = pic.getAttribute("id");
        playGame(userChoice);
    });
});