// while loop
let x = 11
while(x<=20){

    if( x % 2 == 0 ){
        console.log("0dd num",x)
    }else{
        console.log("even num",x)
    }

    x++
}
let y = 10

while(y>-10){
    if(y % 2==1){
        console.log("odd num",y)
    }else if(y==0){
        console.log(y)
    }else{
        console.log("even num",y)
    }
    y--
}
let z = 1
while(z<=10){
    if(z % 2 == 0){
        console.log( "even", z)
    }else{
        console.log( "odd", z)
    }
    
    z++
}
let a = 20
while(a>1){
    if(a%2==1){
        console.log( "odd", a)
    }else{
        console.log( "even", a)
    }
    a--
}

// do while
do{
    var age = window.prompt("please enter the age")
    console.log(age)
}while(!(age > 0 && age <=200))
do{
    var year = window.prompt("plz enter year") 
    console.log(year)
}while(!(year > 0 && year <= 20))

do{
    var amount = parseInt(window.prompt("plz enter amount"))
    console.log(typeof amount)
}while(typeof amount !== "string")

// forloop

for(i=20;i<=30;i++){
    console.log(i)
    if(i==23){
        console.log( "that", i) 
    }
}

let sname = "shiva kumar"
for(i=0;i<sname.length;i++){
    console.log(sname.charAt(i))
}
const fruits = ["apple","banana","orange","pappaya"]
for(let i=0;i<fruits.length;i++){
    console.log( i + 1,fruits[i])
}
const bag = ["veg","nonveg","leaf"]
for(i=0;i<bag.length;i++){
    console.log(i + 1,bag[i])
}

// switch

var presentday = window.prompt("enter day")
var holiday =""

switch(presentday){
    case "monday":
         holiday = "no holiday"
         break;
         case "tuesday":
         holiday = "holiday"
         break;
         case "wednesday":
         holiday = "no holiday"
         break;
         case "thursday":
         holiday = "holiday"
         break;
         case "friday":
         holiday = "no holiday"
         break;
         case "satday":
         holiday = "no holiday"
         break;
         case "sunday":
         holiday = "no holiday"
         break;
         default:
            holiday = "enter valid day"
}
console.log("today is",holiday)

var date = Number(window.prompt("plz enter today date"))
var holidayname = ""
if(date >0 && date <=31){
    switch(date){
        case 1: {
            holidayname ="new year"
            break
        }
        case 2:{
            holidayname = "gandhi jayanthi"
            break
        }
        case 3:{
            holidayname = "second saturday"
            break
        }
        case 15:{
            holidayname = "sankranthi"
            break
        }
        case 26:{
            holidayname = "republic day"
            break
        }
        default :{
            holidayname = "not a holiday"
        }
    }
}else{
    holidayname = "plz enter valid date"
}
console.log(holidayname)
console.log(typeof holidayname)

