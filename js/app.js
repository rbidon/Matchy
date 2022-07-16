let playerOneName = "";
let playerTwoName = "";

// score & time slecting
const time = document.querySelector(".timeHeading");
const score = document.querySelector(".scoreHeading");
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

// Displaying the Cad Background time & Show Section in a function
const timeScoreSection = () => {
    // Card Background  display
    document.querySelector("#startPage").style.display = "none";
    document.querySelector(".cardBackground").style.display = "flex";
    document.querySelector(".cardBackground").style.justifyContent = "center";
    document.querySelector(".cardBackground").style.alignItems ="center";
    document.querySelector(".cardBackground").style.margin = "10px";
        // Show the Time & Score
    document.querySelector(".timeSection").style.display = "flex";
    document.querySelector(".timeSection").style.flexDirection = "column";
    document.querySelector(".timeSection").style.justifyContent = "space-between";
    document.querySelector(".timeSection").style.marginRight = "11px";
    // Remove the instruction page screen from the start page
    document.querySelector(".instructionSection").style.display = "none";
}
// Card Div & Section
//create object array with images I saved
 const cardArray = [
    {   name: "greenStar",
        img: "images/img-1.png",
    },
    {   name: "purplePolygon",
        img: "images/img-2.png",
    },
    {   name: "greenDiamond",
        img: "images/img-3.png",
    },
    {   name: "pinkPolygon",
        img: "images/img-4.png",
    },
    {   name: "blueHexagon",
        img: "images/img-5.png",
    },
    {   name: "yellowSquare",
        img: "images/img-6.png",
    },
    {   name: "greenCircle",
        img: "images/img-7.png",
    },
    {   name: "purpleStar",
        img: "images/img-8.png",
    },
     {  name: "greenStar",
        img: "images/img-1.png",
    },
    {   name: "purplePolygon",
        img: "images/img-2.png",
    },
    {   name: "greenDiamond",
        img: "images/img-3.png",
    },
    {   name: "pinkPolygon",
        img: "images/img-4.png",
    },
    {   name: "blueHexagon",
        img: "images/img-5.png",
    },
    {   name: "yellowSquare",
        img: "images/img-6.png",
    },
    {   name: "greenCircle",
        img: "images/img-7.png",
    },
    {   name: "purpleStar",
        img: "images/img-8.png",
    }
]

//randomize the cardArray
cardArray.sort(()=> 0.5 - Math.random())
console.log(cardArray); 

// grab the player
let playerOneCardSection=document.querySelector(".playerOneCardSection");
// card chosen
// let cardsChosen = [];
// let cardsChosenId = []
// let cardsWon = [];
// let card = document.querySelector(".card");
// console.log(card);
//create the player cards element and append to the section
// media query for the card size
const createBoard = () => {
    for(let i=0; i<cardArray.length; i++) {
        // console.log(cardArray[i]);
        const card= document.createElement("div");
        card.setAttribute("class", "card");
        const cardBack = document.createElement("div");
        const cardFront = document.createElement("div");
        cardFront.setAttribute("class", "card-front card-face");
         const cardImg = document.createElement("img");
         cardImg.setAttribute("class","cardImg"); cardImg.setAttribute("data-id", i);
         cardImg.setAttribute("src", cardArray[i].img);
         cardBack.setAttribute("class", "card-back card-face");
            // card.setAttribute("data-id", i);
            cardBack.appendChild(cardImg);
            card.appendChild(cardBack); 
            card.appendChild(cardFront);
            let playerOneCardSection = document.querySelector(".playerOneCardSection");
            playerOneCardSection.appendChild(card);
            card.addEventListener("click",flipCard);
            // console.log(card);
    }
}
// flipcard function
let cardOne, cardTwo;
const flipCard = (e) => {
    let clickedCard = e.target;
    // console.log(e.target);
    clickedCard.classList.toggle("flipped");
    let grabCards = document.querySelectorAll(".card");
    
      }
    // const cards= document.querySelectorAll(".card")
    // cards.forEach(card => {
    //     console.log(card);
    // })
    // const cardId = cardImg.getAttribute("data-id");
    // console.log("clicked", cardImg);

createBoard();

//check match for the cards
// const checkForMatch = () => {
//     const cards = document.querySelectorAll(".card");
//     const optionOneId = cardsChosenId[0]
//     const optionTwoId = cardsChosenId[1]
//     // condition statement if they are matched on correct
//     if(cardsChosenId[0] === cardsChosenId[1]){
//         alert(`You found a match! ${playerOneName}`);
//         cards[optionOneId].style.display = "none";
//         cards[optionTwoId].style.display = "none";
//         cardsWon.push(cardsChosen);
//     } else{
//         cards[optionOneId].setAttribute("class", "card");
//         cards[optionTwoId].setAttribute("class", "card");
//         alert('Sorry, try again');
//     }
//     cardsChosen=[]
//     cardsChosenId = []
//     score.textContent = cardsWon.length;
//     if  (cardsWon.length === cardArray.length/2) {
//         score.textContent = 'Congratulations! You found them all!';
//     }
// }




// is not generate tableData
// const buildTable = () => {
//     let emptyTable = document.createElement("table");
//     const table = () => {  
//      let tableRow =document.createElement("tr");
//      let tableData = document.createElement("td","td");
     
//      tableData.innerHTML = "This is a table Data";
//      tableRow.appendChild(tableData); 

//      emptyTable.appendChild(tableRow);
//     //  console.log(emptyTable);
//      document.querySelector(".playerOneCardSection").appendChild(emptyTable);
//      emptyTable.style.border="5px solid blue";
//      tableRow.style.border="2px solid red";
//       tableData.style.border=" 2px solid green";
//       emptyTable.style.display="flex";
//       emptyTable.style.flexDirection ="row";
//       emptyTable.style.flexWrap = "wrap";
//       // set the width for the table
//     }
//      for(let i = 0; i<8; i++){
//         table();
//         let tableData = document.createElement("td");
//         tableData.innerHTML = "This is a table Data";
//         let tableRow =document.createElement("tr");
//     //    let getRows = document.querySelectorAll("tr")
//        tableRow.appendChild(tableData); 
//     //    emptyTable.appendChild(tableRow);
//        console.log(emptyTable);
//      }
// }
// for(let k=0; k<4;k++){
//  buildTable();
// }

// 3. Start Button & Card Div
let startButton = document.querySelector(".start");
startButton.addEventListener("click", (e)=>{
    e.preventDefault();

    // hiding start buttons 
    startButton.style.display = "none";
    
    //invoke time & Scorefunction to display
    timeScoreSection();

    // toggle Instruction Rules
    instructionHeading1.addEventListener("click", toggleRules )
})
