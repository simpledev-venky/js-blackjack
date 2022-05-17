let firstcard;
let secondcard;
let cards=[firstcard,secondcard]
let sum =firstcard+secondcard;
let isalive=false;
let hasblackjack=false;
let message="";
let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let playerEl = document.querySelector("#player-el");
let player = {
    name:"venky",
    chips:150
}
 function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13) + 1;
    if(randomNumber===1){
        return 11;
    }
    if(randomNumber>10){
        return 10;
    } 
    else{
        return randomNumber;

    }

 }



function startgame(){
 firstcard=getRandomCard();
 secondcard=getRandomCard();
 cards=[firstcard,secondcard]
 sum =firstcard+secondcard;
 isalive=true;
 hasblackjack=false;
    rendergame();
}

function rendergame(){
    cardsEl.textContent = "cards:"
    for (let i=0;i<cards.length;i++){
        cardsEl.textContent +=  cards[i]+ " " ;

    }
sumEl.textContent="sum:" +" "+sum;
playerEl.textContent = player.name +" $"+ player.chips;

if(sum<21){
    message="you want to pick another card";
}
else if (sum===21){
    message="you won blackjack";
    hasblackjack=true;
}
else{
    message="you lost blackjack";
    isalive=false;
} messageEl.textContent=message;
}

function newcard(){
    
    if(hasblackjack===false && isalive===true){
        let newcard=getRandomCard();
    sum+=newcard;
    cards.push(newcard);
    console.log(cards);

    rendergame();
    }
}


