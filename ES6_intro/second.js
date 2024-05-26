// Problem-1 
// __________________________________________
let oddArry = [1, 2, 3, 4, 5, 8];
let getEvenNumber = oddArry.map(n => n + 1);
console.log(getEvenNumber);

let EvenNumber = [];
for (const n of oddArry) {
    let EvnN = n + 1;
    EvenNumber.push(EvnN);
}
console.log(EvenNumber);



// Problem-2
// __________________________________________

let givenArry = [33, 50, 79, 78, 90, 101, 30];
let divisibleNumber = givenArry.filter(n => n % 10 === 0);
console.log(divisibleNumber);


let getFirstNum = givenArry.find(n => n % 10 === 0);
console.log(getFirstNum);

// Problem-3
// __________________________________________











