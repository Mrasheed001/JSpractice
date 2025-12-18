const minNum = 1
const maxNum = 100
const answer = Math.floor(Math.random() * (maxNum - minNum +1) + minNum);
let gameNotOver = true;
let attempts = 0;
let guess;
while(gameNotOver){

guess = window.prompt(`input a number between ${minNum} - ${maxNum}`)
guess = Number(guess)
    if(guess < minNum || guess > maxNum){
        window.alert(`You no dey hear word..i say within ${minNum} - ${maxNum}`)
    }
    else if(isNaN(guess)){
        window.alert(`you think say you dey wise.. :) This is not Number!`)
    }
    
    else if(guess < answer){
        attempts++ 
        window.alert(`mumu! try again with a higher Number`) 
    }
    else if(guess > answer){
        attempts ++
        window.alert(`as na big big things you dey like!..my friend type something lower jhor!`)
    }
    else{
        window.alert(`you don finally learn the correct answer na ${ answer} after like ${attempts} attempts`)
        gameNotOver = false;
    }  
}

