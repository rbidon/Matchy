let playerOneName = "";
let playerTwoName = "";
// player container where everything will happen
// grab the player
let playerOneCardSection=document.querySelector(".playerOneCardSection");

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
     if(chooseDifficulty === "Easy Road" || chooseDifficulty === "Easy" || chooseDifficulty === "easy"){
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
     } else{
         alert(`${playerOneName} & ${playerTwoName}. You didn't choose your difficulty. I guess you're not ready to play. Come back when you're ready.`) 
        }
    
});

//2. Instruction Section click to remove & add rules container
let instructionHeading1 = document.querySelector(".instructionHeading1");
// toggle button for instructions
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
// function to display the timeSection
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

document.addEventListener('DOMContentLoaded', () => {
// Card Div & Section
// create object array with images I saved

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
// console.log(cardArray); 

let cardHandler = document.querySelector(".cardHandler");
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
//create the player cards element and append to the section
// media query for the card size
 
const createBoard = (e) => {

    for(let i=0; i<cardArray.length; i++) {
        // console.log(cardArray[i]);
        const card= document.createElement("div");
        card.setAttribute("class", "card");
        // card.setAttribute("id", i)
        const cardBack = document.createElement("div");
        const cardFront = document.createElement("div");
        cardFront.setAttribute("class", "card-front card-face");
        cardFront.setAttribute("id", i);
        cardFront.setAttribute("data-id", i);
        // cardFront.setAttribute("name", cardArray[i].name);
         const cardImg = document.createElement("img");
         cardImg.setAttribute("class","cardImg"); 
         cardImg.setAttribute("data-id", i);
         cardImg.setAttribute("src", cardArray[i].img);
         cardImg.setAttribute("name", cardArray[i].name);
         cardImg.setAttribute("value", i);
         cardBack.setAttribute("class", "card-back card-face");
         cardBack.setAttribute("name", cardArray[i].name);
         cardBack.setAttribute("data-id", i);
            cardBack.appendChild(cardImg);
            card.appendChild(cardFront);
            card.appendChild(cardBack); 
             card.addEventListener("click", (e)=>{
        flipCard(e);
    });// console.log(card);  
            cardHandler.appendChild(card);
            
        } 
         
        playerOneCardSection.appendChild(cardHandler);
        
    }
   
// check for match function 
   const checkForMatch =() => {
    const cards = document.querySelectorAll(".card");
    const cardsFront = document.querySelectorAll(".card-front");
    const cardsBack = document.querySelectorAll(".card-back");
    console.log(cards);
    const selectedCardOneId = cardsChosenId[0];
    const selectedCardTwoId = cardsChosenId[1];
    // if statement that will check the id of the cards match
    if(cardsChosen[0] === cardsChosen[1]) {
        console.log(cards[selectedCardOneId]);
        console.log(cards[selectedCardTwoId]);
        cards[selectedCardOneId].classList.add('none');
        
        cards[selectedCardTwoId].classList.add('none');
        cards[selectedCardOneId].removeEventListener('click', flipCard)
        cards[selectedCardTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
        console.log("Storaging the won card", cardsWon);
        alert('You found a match')
    } else {
        //undo the picture 
        cardsFront[selectedCardOneId].classList.remove("flip");
        cardsFront[selectedCardTwoId].classList.remove("flip");
            alert('Sorry, try again')
        }
        cardsChosen = []
        console.log("chosen cards for the game", cardsChosen);
        cardsChosenId = []
        console.log("chosen card id", cardsChosenId);
   }      
   

// flipcard function
    const flipCard = (e) => {
    //flip just the front 
    let grabFront = e.target;
    console.log(grabFront);
    let cardId = e.target.id;
    console.log(cardId);
    grabFront.classList.toggle("flip")
    cardsChosen.push(cardArray[cardId].name)
     console.log("Storaging the Name",cardsChosen)
     cardsChosenId.push(cardId)
     console.log("Storaging the Id in and array", cardsChosenId);
    if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
    }
    
    }  
    
  createBoard();
     
});

// // Player One score & time selection
// console.log(playerOneTime);
let playerOneScore = document.querySelector("#playerOneMatchScore");
let time = document.querySelector("#TimeRemaining");
// console.log(time);
class Game {
    constructor(playerOne,playerTwo){
         this.playerOne  = "";
         this.playerTwo = "";
         // decrease by 1/ time countdown
         this.timer = 60;
         this.score =0;

    }
    //methods
    
    timeDown (){
        time.innerHTML =this.timer;  
        this.timer --;
        console.log(`Timer is decreasing! Time is now ${this.timer}`);
        
    }
    scoreUp(){
        playerOneScore.innerHTML = this.score;
        this.score++;
        console.log(`${playerOneName} is scoring. Score is now!`)
    }
}
let playerOne = new Game("PlayerOne Turn");
//click the start button will start the timer

// grab the players overlay/ text
let playerOneOverlay = document.querySelector(".playerOneOverlay");
let playerOneText = document.querySelector(".playerOneText");
let nextplayerTurn = document.querySelector(".playerTurn");
// console.log(nextplayerTurn)
 let cardHandler = document.querySelector(".cardHandler");
// 3. Start Button for player one game
const startButton = document.querySelector(".start");
startButton.addEventListener("click", (event)=>{
    event.preventDefault();

    // hiding start buttons 
    startButton.style.display = "none";
    // Player One Game Section
    //invoke time & Scorefunction to display
    timeScoreSection();

    // toggle Instruction Rules
    instructionHeading1.addEventListener("click", toggleRules );

    // time interval 
    const timeCountDown = () => {
        playerOne.timeDown();
        if(playerOne.timer < 0){
            console.log(playerOne.timer);
            // alert("Timer is on zero! Player Two Turn!");
            clearInterval(timingCounter);
            // playerOneOverlay.classList.add("opacityPlayerCard");
            playerOneOverlay.style.display = "flex";
            playerOneOverlay.style.justifyContent = "center";
            playerOneOverlay.style.flexDirection = "column";
            cardHandler.style.display ="none";
            // alert(`${playerOneName}'s Turn is Over! Click Okay to Start ${playerTwoName}'s Turn`)
            playerOneText.innerHTML =` Time is Up! `;
            nextplayerTurn.innerHTML =` Click to Start ${playerTwoName}'s Turn`
            
            // display the playerOneOverlay to show the turn is over 

            } 
    }
    let timingCounter = setInterval(timeCountDown,1000);


})
 //     // playerTwo function// 
const playerTwo = ()=> {

    document.addEventListener('DOMContentLoaded', () => {
        // Card Div & Section
        // create object array with images I saved
        
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
        // console.log(cardArray); 
        
        let cardHandler = document.querySelector(".cardHandler");
            let cardsChosen = []
            let cardsChosenId = []
            let cardsWon = []
        //create the player cards element and append to the section
        // media query for the card size
         
        const createBoard = (e) => {
        
            for(let i=0; i<cardArray.length; i++) {
                // console.log(cardArray[i]);
                const card= document.createElement("div");
                card.setAttribute("class", "card");
                // card.setAttribute("id", i)
                const cardBack = document.createElement("div");
                const cardFront = document.createElement("div");
                cardFront.setAttribute("class", "card-front card-face");
                cardFront.setAttribute("id", i);
                cardFront.setAttribute("data-id", i);
                // cardFront.setAttribute("name", cardArray[i].name);
                 const cardImg = document.createElement("img");
                 cardImg.setAttribute("class","cardImg"); 
                 cardImg.setAttribute("data-id", i);
                 cardImg.setAttribute("src", cardArray[i].img);
                 cardImg.setAttribute("name", cardArray[i].name);
                 cardImg.setAttribute("value", i);
                 cardBack.setAttribute("class", "card-back card-face");
                 cardBack.setAttribute("name", cardArray[i].name);
                 cardBack.setAttribute("data-id", i);
                    cardBack.appendChild(cardImg);
                    card.appendChild(cardFront);
                    card.appendChild(cardBack); 
                     card.addEventListener("click", (e)=>{
                flipCard(e);
            });// console.log(card);  
                    cardHandler.appendChild(card);
                    
                } 
                 
                playerOneCardSection.appendChild(cardHandler);
                
            }
           
        // check for match function 
           const checkForMatch =() => {
            const cards = document.querySelectorAll(".card");
            const cardsFront = document.querySelectorAll(".card-front");
            const cardsBack = document.querySelectorAll(".card-back");
            console.log(cards);
            const selectedCardOneId = cardsChosenId[0];
            const selectedCardTwoId = cardsChosenId[1];
            // if statement that will check the id of the cards match
            if(cardsChosen[0] === cardsChosen[1]) {
                console.log(cards[selectedCardOneId]);
                console.log(cards[selectedCardTwoId]);
                cards[selectedCardOneId].classList.add('none');
                
                cards[selectedCardTwoId].classList.add('none');
                cards[selectedCardOneId].removeEventListener('click', flipCard)
                cards[selectedCardTwoId].removeEventListener('click', flipCard)
                cardsWon.push(cardsChosen)
                console.log("Storaging the won card", cardsWon);
                alert('You found a match')
            } else {
                //undo the picture 
                cardsFront[selectedCardOneId].classList.remove("flip");
                cardsFront[selectedCardTwoId].classList.remove("flip");
                    alert('Sorry, try again')
                }
                cardsChosen = []
                console.log("chosen cards for the game", cardsChosen);
                cardsChosenId = []
                console.log("chosen card id", cardsChosenId);
           }      
           
        
        // flipcard function
            const flipCard = (e) => {
            //flip just the front 
            let grabFront = e.target;
            console.log(grabFront);
            let cardId = e.target.id;
            console.log(cardId);
            grabFront.classList.toggle("flip")
            cardsChosen.push(cardArray[cardId].name)
             console.log("Storaging the Name",cardsChosen)
             cardsChosenId.push(cardId)
             console.log("Storaging the Id in and array", cardsChosenId);
            if (cardsChosen.length ===2) {
                setTimeout(checkForMatch, 500)
            }
            
            }  
            
          createBoard();
             
        });
}
nextplayerTurn.addEventListener("click", playerTwo);