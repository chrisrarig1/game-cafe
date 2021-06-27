'use strict'
let game = prompt('Do you like video games?');
let gamer = '';
if( game === 'yes'){
    gamer = 'Game On!!';
}else{
    gamer = 'Play more video games!!';
}

let coffee = prompt('Do you like coffee?');
let drink = '';
if( coffee === 'yes'){
    drink = 'Looks like you need more Coffee!!';
}else{
    drink = 'Drink more Coffee!!';
}


let answer = prompt('What is your name?'); 
let time = new Date().getHours(); //15
let timeOfDay = '';


if(time < 12){
    timeOfDay = 'Good Morning!!!';
} else if(time < 17){
    timeOfDay = 'Good Afternoon!!';
} 

else{
    timeOfDay = 'Good Evening!!';
}
if(time > 12){
    time = time - 12 + 'pm';
} else {
    time = time + 'am';
}

let greeting = '';
if(answer === 'Chris'){
    greeting = timeOfDay  + ' ' + answer + " " + drink + " " + time + " " + gamer;
} else{
    greeting = timeOfDay  + ' ' + answer + " " + drink + " " + time + " " + gamer;
}


document.write(greeting);








