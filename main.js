alert ("Эгей");
alert("Эврибади!");


//
bati()
function bati(Imy) {
    if(Imy==="Боб"){
        console.log("Привет Боб!")}
    else {
        console.log("Ты не Боб.ГДЕ ОН!")
    } 
    }
// 

function calc(operation,a,b){
    if(operation==="add"){
         return a+b
    }else if(operation==="multi"){
         return a*b
    }else if(operation==="subtract"){
         return a-b
    }else{
        return ("Ошибка!")
    }
}
let rez=calc("add",1,2)
let rez2=calc("multi",1,2)
let rez3=calc("subtract",3,2)
console.log(rez)
console.log(rez2)
console.log(rez3)

// 
let i=5;
do{    
    console.log(i)
    i=i+1;
} while(i<19)


    for(let z=1;z<19;z++){
        console.log(z)
    }