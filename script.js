'use strict'

let answer = prompt('What is your name?');
let time = new Date().getHours();
if(time > 12){
    time = time - 12 + 'pm';
} else { time = time + 'am';
}
let timeofday = '' ;
if (time < 12){
    timeofday= image.src = 'https://i.pinimg.com/originals/5c/bb/a7/5cbba7c24bded7fdfda03c39d2fe7a91.png'
}else if (time < 17){
    timeofday= image.src = 'https://64.media.tumblr.com/0915f8d8d440bd2eaef060602131809d/tumblr_phr14nV9G21wjrtg1o1_400.png'
}
else{
    timeofday= image.src = 'https://static.wikia.nocookie.net/mario/images/a/a1/Boo_CTTT.png/revision/latest?cb=20210504081014'
}
let greeting = '';

if(answer === 'chris'){
    greeting = 'Hello '+ answer +'!! '+'Welcome to the Game Cafe' + time + timeofday;
}else {
    greeting = 'Hello '+ answer +'!! '+'Welcome to the Game Cafe'+ time + timeofday;
}

document.write(greeting);


