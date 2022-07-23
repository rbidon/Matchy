let playerOneName = "";
let playerTwoName = "";
// player container where everything will happen
// grab the player
let playerOneCardSection=document.querySelector(".playerOneCardSection");
/////////// PLAYER ONE GAME OPTION /////////////
let onePlayerBtn = document.querySelector(".onePlayer")
// onePlayerBtn.addEventListener("click", (e) => {
//  e.preventDefault();
//  alert("Welcome to Matchy!");
//  alert(`You have selected the One Player Option.`);
//  // prompt for one player name
//  while(playerOneName === ""){
//     playerOneName = prompt("What is your name, Player One?");
// }console.log(playerOneName);
//  // Choosing Difficulity: Easy Road/ Hard Road
//  let chooseDifficulty = ""; 
//  while(chooseDifficulty === ""){
//     chooseDifficulty = prompt(`Hello ${playerOneName}! Choose your Difficulty Easy Road or Hard Road?`)
// };
//  console.log(`Player have selected the ${chooseDifficulty}`);
//  // Player Select Difficulity
//  if(chooseDifficulty === "Easy Road" || chooseDifficulty === "Easy" || chooseDifficulty === "easy"){
//     // direct them to the start page for Easy Road
//     // Will display the change screen to the start button
//     document.querySelector("#homepageBackground").style.display = "none";
//     document.querySelector("#startPage").style.display = "flex";
//     document.querySelector("#startPage").style.justifyContent = "center";
//     document.querySelector("#startPage").style.alignItems ="center";
//     document.querySelector(".instructionSection").style.display = "flex";
//     document.querySelector(".instructionSection").style.flexDirection = "column";
//     document.querySelector(".instructionSection").style.justifyContent = "flex-start";
//  } else{
//      alert(`${playerOneName}, you didn't choose your difficulty. I guess you're not ready to play. Come back when you're ready.`) 
//      window.location.reset();
//     }
// });

// Player One Button Direct them to player two button. Must create seperate div to hide & show


// //////////////PLAYER TWO OPTION GAME ////////////////////
//1. Grab two player button to initiate the prompt a then the start button 
let twoPlayerBtn = document.querySelector(".twoPlayer");
twoPlayerBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    alert("Welcome to Matchy!");
    alert(`You have selected the Two Players Option.`);
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
         window.location.reload();
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
// // Player One score & time selection
// console.log(playerOneTime);
let playerOneScore = document.querySelector("#playerOneMatchScore");
let time = document.querySelector("#TimeRemaining");
let time2 = document.querySelector("#TimeRemaining2")
// console.log(time);
// Game Class  that storages the scoring & timeCountDown
class Game {
    constructor(player){
         this.player  = player;
         // decrease by 1/ time countdown
         this.timer = 60;
         this.score =0;

    }
    //methods
    
    timeDown (){
        time.innerHTML =this.timer;  
        this.timer --;
        console.log(` ${this.player} Timer is decreasing! Time is now ${this.timer}`);
        
    }
    scoreUp(){
        this.score = this.score + 2;
        playerOneScore.innerHTML = this.score;
        
        console.log(`${this.player} is scoring. Score is now ${this.score}!`)
    }
    scoreSame(){
        this.score = this.score + 0;
        playerOneScore.innerHTML = this.score;
        console.log(`${this.player} is scoring. Score is now ${this.score}!`)
    }
}
let playerOne = new Game("PlayerOne");
let playerTwo = new Game("PlayerTwo");


 // Generated Cards for Player 1
 const cardGame = () => {
 
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
   
    // Card Div & Section
     // cardHandler for Player One
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
        }); 
                cardHandler.appendChild(card);
                
            } 
             
            playerOneCardSection.appendChild(cardHandler);
            
        }
       
    // check for match function 
       const checkForMatch =() => {
        const cards = document.querySelectorAll(".card");
        // console.log(card); 
        const cardsFront = document.querySelectorAll(".card-front");
        const cardsBack = document.querySelectorAll(".card-back");
        const selectedCardOneId = cardsChosenId[0];
        const selectedCardTwoId = cardsChosenId[1];
        
        // if statement that will check the id of the cards match
        if(cardsChosen[0] === cardsChosen[1]) {
            // console.log(cards[selectedCardOneId]);
            // console.log(cards[selectedCardTwoId]);
            cards[selectedCardOneId].classList.add('none');
            
            cards[selectedCardTwoId].classList.add('none');
            cards[selectedCardOneId].removeEventListener('click', flipCard)
            cards[selectedCardTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
            // console.log("Storaging the won card", cardsWon);
            alert('You found a match')
            playerOne.scoreUp()
            // playerTwo.scoreUp();
            console.log(`${playerOne.player} is scoring with the match, the score is now", ${playerOne.score}`);
        } else {
            //undo the picture 
            cardsFront[selectedCardOneId].classList.remove("flip");
            cardsFront[selectedCardTwoId].classList.remove("flip");
                alert('Sorry, try again');
                playerOne.scoreSame();
                // playerTwo.scoreSame();
                console.log(`${playerOne.player}didn't get a match, the score is now ${playerOne.score}`);
                
            }
            cardsChosen = []
            // console.log("chosen cards for the game", cardsChosen);
            cardsChosenId = []
            // console.log("chosen card id", cardsChosenId);
       }      
       
    
    // flipcard function
        const flipCard = (e) => {
        //flip just the front 
        let grabFront = e.target;
        // console.log(grabFront);
        let cardId = e.target.id;
        // console.log(cardId);
        grabFront.classList.toggle("flip")
        cardsChosen.push(cardArray[cardId].name)
        //  console.log("Storaging the Name",cardsChosen)
         cardsChosenId.push(cardId)
        //  console.log("Storaging the Id in and array", cardsChosenId);
        if (cardsChosen.length ===2) {
            setTimeout(checkForMatch, 500)
        }
        
        }  
        
      createBoard();
         
    };




// grab the players overlay/ text
let playerOneOverlay = document.querySelector(".playerOneOverlay");
let playerOneText = document.querySelector(".playerOneText");
let nextPlayerTurn = document.querySelector(".playerTurn");
// console.log(nextplayerTurn)
 let cardHandler = document.querySelector(".cardHandler");
 
// 3. Start Button for player one game
//click the start button will start the timer
const startButton = document.querySelector(".start");
startButton.addEventListener("click", (event)=>{
    event.preventDefault();

    // hiding start buttons 
    startButton.style.display = "none";
    // Player One Game Section
    //invoke time & Scorefunction to display
     cardGame();
     timeScoreSection();

    // toggle Instruction Rules
    instructionHeading1.addEventListener("click", toggleRules );

    // time interval 
    const timeCountDown = () => {
        playerOne.timeDown();
        if(playerOne.timer <= 0){
            time.innerHTML = 0;
            // console.log(playerOne.timer);
            // alert("Timer is on zero! Player Two Turn!");
            clearInterval(timingCounter); 
            // display the playerOneOverlay to show the turn is over 
            playerOneOverlay.style.display = "flex";
            playerOneOverlay.style.justifyContent = "center";
            playerOneOverlay.style.flexDirection = "column";
            cardHandler.style.display ="none";
            // alert(`${playerOneName}'s Turn is Over! Click Okay to Start ${playerTwoName}'s Turn`)
            playerOneText.innerHTML =` Time is Up! `;
            nextPlayerTurn.innerHTML =` Click to Start ${playerTwoName}'s Turn`
            
           
            console.log(` The time has ended. Player One Score is ${playerOne.score}`)
            } 
    }
    let timingCounter = setInterval(timeCountDown,1000);
    
})
// button to sent them to the score board 
let scoringBtn = document.querySelector(".scoringBoardBtn");
//  console.log(scoringBtn);

 const cards = document.querySelectorAll(".card");


 // Generated Cards for Player 2
 const cardGame1 = () => {
 
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
       
        // Card Div & Section
         // cardHandler for Player One
        let cardHandler2 = document.querySelector(".cardHandler2");
            let cardsChosen = []
            let cardsChosenId = []
            let cardsWon = []
        //create the player cards element and append to the section
        // media query for the card size
         
        const createBoard = (e) => {
        
            for(let j=0; j<cardArray.length; j++) {
                // console.log(cardArray[i]);
                const card= document.createElement("div");
                card.setAttribute("class", "card2");
                // card.setAttribute("id", i)
                const cardBack = document.createElement("div");
                const cardFront = document.createElement("div");
                cardFront.setAttribute("class", "card-front2 card-face");
                cardFront.setAttribute("id", j);
                cardFront.setAttribute("data-id", j);
                // cardFront.setAttribute("name", cardArray[i].name);
                 const cardImg = document.createElement("img");
                 cardImg.setAttribute("class","cardImg"); 
                 cardImg.setAttribute("data-id", j);
                 cardImg.setAttribute("src", cardArray[j].img);
                 cardImg.setAttribute("name", cardArray[j].name);
                 cardImg.setAttribute("value", j);
                 cardBack.setAttribute("class", "card-back card-face");
                 cardBack.setAttribute("name", cardArray[j].name);
                 cardBack.setAttribute("data-id", j);
                    cardBack.appendChild(cardImg);
                    card.appendChild(cardFront);
                    card.appendChild(cardBack); 
                     card.addEventListener("click", (e)=>{
                flipCard(e);
            });// console.log(card);  
                    cardHandler2.appendChild(card);
                    
                } 
                 
                playerOneCardSection.appendChild(cardHandler2);
                
            }
           
        // check for match function 
           const checkForMatch =() => {
            const cards2 = document.querySelectorAll(".card2");
            const cardsFront2 = document.querySelectorAll(".card-front2");
            console.log(cardsFront2);
            const cardsBack = document.querySelectorAll(".card-back");
            console.log(cards);
            const selectedCardOneId2 = cardsChosenId[0];
            const selectedCardTwoId2 = cardsChosenId[1];
            
            // if statement that will check the id of the cards match
            if(cardsChosen[0] === cardsChosen[1]) {
                // console.log(cards2[selectedCardOneId2]);
                // console.log(cards2[selectedCardTwoId2])
                cards2[selectedCardOneId2].classList.add('none2');
                cards2[selectedCardTwoId2].classList.add('none2');
                cards2[selectedCardOneId2].removeEventListener('click', flipCard)
                cards2[selectedCardTwoId2].removeEventListener('click', flipCard)
                cardsWon.push(cardsChosen)
                // console.log("Storaging the won card", cardsWon);
                alert('You found a match')
                // playerOne.scoreUp()
                playerTwo.scoreUp();
                console.log(`${playerTwo.player} is scoring with the match, the score is now", ${playerTwo.score}`)
            } else {
                //undo the picture 
                cardsFront2[selectedCardOneId2].classList.remove("flip2");
                cardsFront2[selectedCardTwoId2].classList.remove("flip2");
                    alert('Sorry, try again');
                    
                    playerTwo.scoreSame();
                    console.log(`${playerTwo.player}didn't get a match, the score is now ${playerTwo.score}`)
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
            // console.log(grabFront);
            let cardId = e.target.id;
            // console.log(cardId);
            grabFront.classList.toggle("flip2")
            cardsChosen.push(cardArray[cardId].name)
            //  console.log("Storaging the Name",cardsChosen)
             cardsChosenId.push(cardId)
            //  console.log("Storaging the Id in and array", cardsChosenId);
            if (cardsChosen.length ===2) {
                setTimeout(checkForMatch, 500)
            }
            
            }  
            
          createBoard();
             
        };
        
let grabcardHandler = document.querySelector(".cardHandler");
let cardHandler2 = document.querySelector(".cardHandler2");
let cardsPlayerOne = document.querySelectorAll(".card")
  // playerTwo function// 
 // created a player 2 Class calleed playerTwo
const playerTwoTurn = ()=> {
    playerTwo.score= 0;
    cardGame1();
    playerOneOverlay.style.display = "none";
    nextPlayerTurn.style.display ="none";
    scoringBtn.style.display = "none";
    grabcardHandler.style.display = "none";
    cardHandler2.style.display ="grid";
    cardHandler2.style.justifyContent = "center";
    cardHandler2.style.alignItems = "center";
    cardHandler2.style.gridTemplateColumns ="1fr 1fr 1fr 1fr";
    cardHandler2.style.gridTemplateRows = "1fr 1fr 1fr 1fr";
    cardHandler2.style.alignContent = "space-evenly";
    cardHandler2.style.justifyItems = "center";
    
    // cardHandler2.style.display ="flex";
    // cardHandler2.style.flexWrap = "wrap";
    // cardHandler2.style.alignContent = "space-around";
    // cardHandler2.style.justifyContent = "space-evenly";

// generate playerTwoTurn
    
    const timeCountDownPlayerTwo = () => {
         playerTwo.timeDown();
        if(playerTwo.timer <= 0){
            time.innerHTML = 0;
            // console.log(playerTwo.timer);
            // alert("Timer is on zero! Player Two Turn!");
            clearInterval(timingCounter2);

            playerOneOverlay.style.display = "flex";
            playerOneOverlay.style.justifyContent = "center";
            playerOneOverlay.style.flexDirection = "column";
           cardHandler.style.display = "none"; 
            playerOneText.style.display ="inline-block";
            playerOneText.style.textAlign = "center";
            playerOneText.innerHTML =` Time is Up! `;
            scoringBtn.style.display = "block";
            scoringBtn.style.textAlign = "center";
            scoringBtn.innerHTML = `Click to See the Winner!`
            console.log(` The time has ended. Player One Score is ${playerTwo.score}`)
        } 
  }     
        let timingCounter2 = setInterval(timeCountDownPlayerTwo,1000);
        

        // set the score back to zero
}
nextPlayerTurn.addEventListener("click", playerTwoTurn);

// grab gameOver Text & Reset Buttons
let gameOverText = document.querySelector(".gameOverText");
let ResetBtn = document.querySelector(".resetBtn");
// Scoring Function
const scoringBoard = () => {
    cardHandler.style.display = "none";
    cardHandler2.style.display = "none";
    playerOneOverlay.style.display = "none";
    nextPlayerTurn.style.display ="none";
    scoringBtn.style.display = "none";
    document.querySelector(".timeSection").style.display = "none";
    if(playerOne.score > playerTwo.score){
        alert(` Congrats ${playerOneName}! Winning with a score of ${playerOne.score} over ${playerTwoName} score of ${playerTwo.score}`);
    } else if( playerTwo.score > playerOne.score){
        alert(` Congrats ${playerTwoName}! Winning with a score of ${playerTwo.score} over ${playerOneName} score of ${playerOne.score}`);
    } else if(playerTwo.score === playerOne.score){
        alert(` Look like we have a tie! ${playerOneName} & ${playerTwoName} have tied with a score of ${playerTwo.score}. Congrats Winners!`);
       
    }
    // display gameOver Section & Reset Button
    // gameOverText.style.display = "block";
    playerOneOverlay.style.display = "flex";
    playerOneText.style.display ="none";
    gameOverText.style.display ="inline-block";
    gameOverText.style.textAlign = "center";
    gameOverText.innerHTML =` Game Over `;
        // reset button selection
        ResetBtn.style.display = "block";
        ResetBtn.style.textAlign = "center";
        ResetBtn.innerHTML = `Reset`;
}

scoringBtn.addEventListener("click", scoringBoard);

/// reset button 
ResetBtn.addEventListener("click", () => {
    // learned from document provided by Justin & researching
  window.location.reload() 
})
