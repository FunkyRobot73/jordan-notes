// Numeric
// - integer
var myInt = 5;
// - float
var myFloat = 5.98;

// String
var myString = '5';
var myName = 'Jordan Doerksen'
var myName = "Jordan Doerksen"

// console.log("Hello how do you spell 'test'?")
// console.log('Hello how do you spell "test"?')

// console.log('Hello how do you spell \'test\'?')
// console.log("Hello how do you spell \"test\"?")

// console.log("Jordan\n\rDoerksen")
// console.log("Jordan\tDoerksen")
// console.log("Jordan\\Doerksen")

// Boolean (True, False)
var myNotBoolean = "false"
var myBoolean = false
// console.log(myNotBoolean)
// console.log(myBoolean)

var debug_mode = false

if (debug_mode) {
    console.log("This is some helpful message")
}

// Operators
// Arithmetic - Operators
var num1 = 5
var num2 = 3

// console.log(num1 + num2)
// console.log(num1 - num2)
// console.log(num1 * num2)
// console.log(num1 / num2)
// console.log(num1 ** 488)

// Modulus
// 5 MOD 3 = 2
// 5 - (5 / 3) = 2
// console.log(num1 % num2)
// console.log(2482614545484154 % 10000)

var someNumber = 9

// console.log(`${someNumber} ${(someNumber % 2 == 0 ? "is even" : "is odd")}`)


var isOddOrEvenText = someNumber % 2 == 0 ? "is even" : "is odd";
// <Condition> ? <result if true> : <result if false>
// console.log(`${someNumber} ${isOddOrEvenText}`)


var myNumber = 13
// console.log(myNumber++)

// console.log(myNumber)

// console.log(myNumber--)

// console.log(myNumber)


// Comparison - Operators

// console.log(5 > 3)
// console.log(5 < 3)
// console.log(5 == 3)
// console.log(5 != 3)
// console.log(5 >= 3)
// console.log(5 <= 3)

// console.log(5 == '5')
// console.log(5 == '05')

// console.log('Dog' > 'cat')

// console.log("11" > "1")

// function whichNumberIsLarger(){
//     let num1 = parseInt(document.getElementById('num1').value);
//     let num2 = parseInt(document.getElementById('num2').value);
//     let sum = num1 + num2
//     let num1IsLarger = num1>num2;

//     if(num1IsLarger){
//         alert(`${num1} is larger than ${num2}`)
//     }else{
//         alert(`${num2} is larger than ${num1}`)
//     }
//     alert(`... and ${num1} + ${num2} = ${sum}`)
// }

// Control Statements


// If
let score = 75;

// if (score >= 75){
//     console.log('Pass')
// }else if(score >= 60){
//     console.log('Pass... but you could do better!')
// }else{
//     console.log('Fail')
// }

// Ternary

// <condition> ? <value if true> : <value if false>
// let age = 18;
// let isAdult = (age >= 18) ? true : false;
// console.log(isAdult);

//
// isAdult = false
// if (age>=18){
//     isAdult = true
// }else {
//     isAdult = false
// }

// Switch

// let suit = 1;
// switch(suit){
//     case 0:
//         console.log('Spades');
//         break;
//     case 1:
//         console.log("Hearts");
//         break;
//     case 2:
//         console.log("Clubs")
//         break;
//     case 3:
//         console.log("Diamonds")
//         break;
//     default:
//         console.log("n/a")
// }


// Loops
// for (let i = 0; i < 5; i++){
//     console.log(i)
// }

// Silly for loop
// let i = 0;
// for (;i<5;){
//     console.log(i);
//     i++;
// }

// let daysOfTheWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
// for(let i = 0; i < daysOfTheWeek.length; i++){
//     console.log(daysOfTheWeek[i])
// }

// While
// let answer = parseInt(Math.random() * 10);

// let guess = -1;
// console.log(answer)
// while(guess != answer){
//     guess = parseInt(Math.random() * 10);
//     console.log(`Answer is ${answer} but I guessed ${guess}`)
// }
// while(0){
//     console.log('hello')
// }

// Function Declaration
// function sumNumbers(numArray) {
//     let sum = 0;
//     for (let i = 0; i < numArray.length; i++) {
//         sum += parseInt(numArray[i])
//     }
//     return sum;
// }

// let exampleNumberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(sumNumbers(exampleNumberArray));

// Function Expression
// const myAdd = function (num1, num2) {
//     return num1 + num2;
// }

// console.log(myAdd(2, 5));

// Arrow Function
// const mySubtract = (num1, num2) => {
//     return num1 - num2;
// }

// console.log(mySubtract(7,3))

// Recursive function

// 4!
// 4 * 3!
// 3 * 2!
// 2 * 1!
// 1 = 1

// function factorial(n){
//     if (n === 1){
//         return 1;
//     } else {
//         return n * factorial(n-1);
//     }
// }

// console.log(factorial(4));
// 0, 1, 1, 2, 3, 5, 8, 13, 21
// function fib(n){
//     if (n === 1){
//         return 0;
//     } else if (n === 2){
//         return 1;
//     } else {
//         return fib(n-2) + fib(n-1)
//     }
// }

// console.log(fib(7));

// Class (Template, Abstraction) Definition
class Vehicle {
    constructor(year, make, model, milage, doors, cost, price){
        // Instance variable
        this.year = year;
        this.make = make;
        this.model = model;
        this.milage = milage;
        this.doors = doors;
        this.cost = cost;
        this.price = price;
    }

    // Methods
    getCarName(){
        return `${this.year} ${this.make} ${this.model}`
    }

    setPrice(newPrice){
        if (newPrice>this.cost){
            this.price = newPrice
        }
    }
}

// Object Creation
let myCar = new Vehicle('2004', 'Audi', 'TT', '400,000', 3, 7000, 10000);
let myOtherCar = new Vehicle('2019', 'Volkswagen', 'Golf', '70,000', 5, 14000, 20000);
