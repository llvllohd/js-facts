const button = document.querySelector('#button');
const factswindow = document.querySelector('#factswindow');
const facts = [
    {
        description: "null is an object in js"
    },
    {
        description: "typeof NaN is number"
    },
    {
        description: "== do a type coercion"
    },
    {
        description: "const & let do not hoist"
    },
    {
        description: "function declaration can hoist but function expression can not"
    },
    {
        description: "All function that accepts function as a parameter are known as higher order function"
    },
    {
        description: "map return a new array but foreach do not"
    },
    {
        description: "let & const has a block scope"
    },
    {
        description: "IIFE invoke it self you don't have to do it specifically"
    },
    {
        description: "All objects are stored in the heap memory whereas all primitive type are stored in stack"
    },
    {
        description: "JS is single threaded but still it is non blocking due to web apis & event loop"
    },
    {
        description: "(NaN === NaN) return false"
    },
    {
        description: "(1 < 2 < 3) returns true"
    },
    {
        description: "(3 > 2 > 1) return false"
    },
    {
        description: "Arrow function can not be a constructor function"
    },
    {
        description: "In a function arguments is a special array-like variable that contains all parameters passed to it"
    }
]
let random;
button.addEventListener('click',function(e){

    random = Math.floor(Math.random()*facts.length);
    factswindow.textContent = facts[random].description;
    console.log(random);



});