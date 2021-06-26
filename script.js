'use strict'

let name = prompt('What is your name?');
let time = new Date().getHours();
if(time > 12){
    time= time - 12 + 'pm';
} else { time = time +'am';
}
let greeting = '';

if(answer === 'chris' ){
    greeting = 'Hello '+ name+'!! '+'Welcome to the Game Cafe' + time;
}else {
    greeting = 'Hello '+ name+'!! '+'Welcome to the Game Cafe'+ time;
}
document.write(greeting);


