'use strict'

let answer = prompt('What is your name?');
let time = new Date().getHours();
if(time > 12){
    time = time - 12 + 'pm';
} else { time = time + 'am';
}
let timeofday = '';
if (time < 12){
    timeofday = 'Good Morning!!';
}else if (time < 17){
    timeofday = 'Good Afternoon!!'
}else{
    timeofday = 'Good Evening!!'
}
let greeting = '';

if(answer === 'chris'){
    greeting = 'Hello '+ answer +'!! '+ timeofday +' Welcome to the Game Cafe ' + time;
}else {
    greeting = 'Hello '+ answer +'!! '+ timeofday +' Welcome to the Game Cafe '+ time;
}

document.write(greeting);


