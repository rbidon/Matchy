let playerOneName = "";
let playerTwoName = "";
//1. Grab two player button to initiate the prompt a then the start button 
let twoPlayerBtn = document.querySelector(".twoPlayer");
twoPlayerBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    alert("Welcome to Matchy!");
    // Prompt for Player One Name
    while(playerOneName === ""){
        playerOneName = prompt("What is your name, Player One?");
    }console.log(playerOneName);
    // Prompt for Player Two
    while(playerTwoName === ""){
        playerTwoName = prompt("What is your name, Player Two?");
    }console.log(playerTwoName);

    // Choosing Difficulity: Easy Road/ Hard Road
     let chooseDifficulty = ""; 
     while(chooseDifficulty === ""){
        chooseDifficulty = prompt(`Hello ${playerOneName} & ${playerTwoName}. Choose your Difficulty Easy Road or Hard Road?`)
    };
     console.log(`Players have selected the ${chooseDifficulty}`);
     // Player Select Difficulity
     if(chooseDifficulty === "Easy" || "Easy Road"){
        // direct them to the start page for Easy Road
        // window.location.assign("../startEasy.html");
        // Will display the change screen to the start button
        document.querySelector("#homepageBackground").style.display = "none";
        document.querySelector("#startPage").style.display = "flex";
        document.querySelector("#startPage").style.justifyContent = "center";
        document.querySelector("#startPage").style.alignItems ="center";
        document.querySelector(".instructionSection").style.display = "flex";
        document.querySelector(".instructionSection").style.flexDirection = "column";
        document.querySelector(".instructionSection").style.justifyContent = "flex-start";

        
     }
});

//2. Instruction Section click to remove & add rules container
let instructionHeading1 = document.querySelector(".instructionHeading1");

function toggleRules () { 
    
    let instructionText = document.querySelector(".instructionHeading1").nextElementSibling;
    instructionText.classList.toggle("active");
    if (instructionText.classList.contains("active")) {
        instructionText.style.display = "flex";
        instructionText.style.alignContent ="center";
        instructionText.style.flexDirection ="column";
        instructionText.style.margin = "10px";
    } else {
        instructionText.style.display = "none";
    }
};

// Displaying the time & Show Section in a function
const timeScoreSection = () => {
        // Show the Time & Score
    document.querySelector(".timeSection").style.display = "flex";
    document.querySelector(".timeSection").style.flexDirection = "column";
    document.querySelector(".timeSection").style.justifyContent = "space-between";
    // Remove the instruction page screen from the start page
    document.querySelector(".instructionSection").style.display = "none";
}



//3. Start Button & Card Div
let startButton = document.querySelector(".start");
startButton.addEventListener("click", (e)=>{
    e.preventDefault();

    // hiding start buttons 
    startButton.style.display = "none";
    //invoke time & Scorefunction
    timeScoreSection();

    // toggle Instruction Rules
    instructionHeading1.addEventListener("click", toggleRules )
})
