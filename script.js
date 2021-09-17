// zet de functie om naar een arrow functie
// const ikRockArrowFunctions = function () {
//     console.log("Joe, ik rock de arrow functions!");
//   };

//   ikRockArrowFunctions()

// Deel A
const ikRockArrowFunctions = () => {
    console.log("Joe, ik rock de arrow functions!");
}

// Dit werkt ook, dus nog korter:
const ikRockArrowFunctions2 = () => console.log("Joe, ik rock de arrow functions!");

ikRockArrowFunctions()
ikRockArrowFunctions2()

// Deel B
const fivePlusSeven = function () {
    return 5 + 7
};

const fivePlusSeven2 = () => 5 + 7;

//Deel C
const myFunction = (a, b) => a + b; 

// Deel D
const addFive = a => a + 5;

// Deel E
const createObject = () => ({greeting: "hoi"});