console.log("Hello from JavaScript");
//scope of var
{
var personName = "Dave"; //Global Scope whe inside a block also.
}
//scope of variables
console.log("Global",personName);

function printName() {
    console.log("Inside function",personName);
}
printName();


{let newName = "game"
console.log("blockScpoe",newName)} //inside a block so gives a block scope this means it can be used inside the block

{const marks= 45
// console.log(marks=marks+1); //wont change the value as it uses const
let marks1 = 50
console.log(marks1=marks1+2);//will change the value 
}

//functions
function sum (num1 , num2){
    return num1+num2;
}
let result = sum(40,50);//call with a variable
console.log(sum(20,40));//call directly inside log

//arrow functions
sum=(num1,num2) => {
    return num1+num2;

} 
console.log(sum(40+90));

//classes

class Car {
    name;
    model;
    enginePower;
    constructor(name,model,enginePower){
        this.name = name;
        this.model = model;
        this.enginePower = enginePower;
    }

    age() {
        let date = new Date();
        return date.getFullYear() - this.model;
    }

}

let myFord = new Car("ecoSport" , 2015 , "1500cc")
console.log(myFord.age(),"years");


