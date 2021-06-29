'use strict'

let time = new Date().getHours(); //15
function getgamer(){
    let game = prompt('Do you like video games?');
    let gamer = '';
    if( game === 'yes'){
        gamer = 'Game On!!';
    }else{
        gamer = 'Play more video games!!';
    }
    return gamer;
}

function getcoffee(){
    let coffee = prompt('Do you like coffee?');
    let drink = '';
    if( coffee === 'yes'){
        drink = 'Looks like you need more Coffee!!';
    }else{
        drink = 'Drink more Coffee!!';
    }
    return drink;
}

function getname(){
    let name = prompt('What is your name?'); 
    return name;
}


function gettimeofday(time){
    let timeOfDay = '';
    if(time < 12){
        timeOfDay = 'Good Morning!!!';
    } else if(time < 17){
        timeOfDay = 'Good Afternoon!!';
    } 
    
    else{
        timeOfDay = 'Good Evening!!';
    }
    return timeOfDay;
}

function getamorpm(time){
    if(time > 12){
        time = time - 12 + 'pm';
    } else {
        time = time + 'am';
    }
    return time;
}

function getgreeting(timeOfDay,name,drink,amorpm,gamer){
    let greeting = '';
    if(name === 'Chris'){
        greeting = timeOfDay  + ' ' + name + " " + drink + " The time is" + amorpm + " " + gamer;
    } else{
        greeting = timeOfDay  + ' ' + name + " " + drink + " The time is" + amorpm + " " + gamer;
    } 
    return greeting;
}

function writeToDocument(message){
    document.write(message);
}

let timeOfDay = gettimeofday(time);
let name = getname();
let drink = getgamer();
let amorpm = getamorpm(time);
let greeting = getgreeting(timeOfDay,name,drink,time,gamer)


writeToDocument(greeting);








