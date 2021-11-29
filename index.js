var now = new Date();
now.setDate(now.getDate()+1)
console.log(now.valueOf());
var friday = new Date();
var counter = 0;
// console.log(now.getDate());
// console.log((now.getDate - nextDay(0))/86400+"hatthatt");
// console.log(now.getDate())
// console.log(now.getDay())
// console.log(nextDay(4).getDate())
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var daysLeft = new Array(7);
daysLeft[0] = 5;
daysLeft[1] = 4;
daysLeft[2] = 3;
daysLeft[3] = 2;
daysLeft[4] = 1;
daysLeft[5] = 0;
daysLeft[6] = 6;

var n = weekday[now.getDay()];

console.log(weekday)
console.log(n);
console.log(weekday[now.getDay()]);
console.log(friday);
console.log(nextDay(5));
console.log(daysLeft[now.getDay()])


var myNewDate = new Date(now);

myNewDate.setDate(myNewDate.getDate() + daysLeft[now.getDay()]);
console.log(myNewDate);
timeDiff = myNewDate.valueOf() - now.valueOf();
console.log(timeDiff);
var diffMs = (myNewDate - now); // milliseconds between now & Christmas
var diffDays = Math.floor(diffMs / 86400000); // days
var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
alert(diffDays + " days, " + diffHrs + " hours, " + diffMins + " minutes until Christmas 2009 =)");
// alert(myNewDate.getDate() + daysLeft[now.getDay()]);
// alert(myNewDate);
// console.log("------------");
// console.log(myNewDate);
// console.log("------------");
// let diff = (myNewDate.getTime() - now.getTime());
// // alert(diff / (1000*60*60*24));
// alert(diff + " " + myNewDate.getTime() + " " + now.getTime());

let reaction = document.getElementById('container');
let overflow1 = document.createElement('img');
let overflow2 = document.createElement('img');
overflow1.src = "./img/overflow.png";
overflow2.src = "./img/overflow.png";
overflow1.setAttribute("id", "overflow1");
overflow2.setAttribute("id", "overflow2");
let yeah = document.createElement('img');
yeah.src = "./img/yes.gif"
yeah.setAttribute ("id", "yeah");
yeah.setAttribute("class", "center");
let nooo = document.createElement('img');
nooo.src = "./img/no.gif"
nooo.setAttribute("id", "nooo");
nooo.setAttribute("class", "center");
if(n==="Friday"){
  reaction.appendChild(yeah);
  reaction.appendChild(overflow1);
  reaction.appendChild(overflow2);
}else{
  reaction.appendChild(nooo);
}

function nextDay(x){
  var now = new Date();    
  now.setDate(now.getDate() + (x+(7-now.getDay())) % 7);
  
  return now;
}

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}