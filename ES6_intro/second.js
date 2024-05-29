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

const instructor = [
    {name: "nodi", age: 28, position: "senior"},
    {name: "akil", age: 28, position: "mid-level"},
    {name: "shobuj", age: 28, position: "junior"},
    {name: "Nadia", age: 28, position: "senior"}
]

let senior = [];
let getSenior = instructor.filter(p => { if(p.position === "senior"){
    senior.push(p);
}});
console.log(senior);


// Problem-3
// __________________________________________

const people = [
    {name: "Meena", Age: 20},
    {name: "rita", Age: 15},
    {name: "suchorita", Age: 22}
];

let sum = 0;
for(const age of people){
    let personAge = age.Age;
    sum += personAge;
}

console.log("Total sum of these age is: ", sum);

const sumOfAge = people.reduce((accumlator, currentValue) => accumlator + currentValue.Age, 0);
console.log(sumOfAge);


function min(nums) { return Math.min(nums) }
console.log(min( ...[1,3,2 ]));

const [a, b] = [1,2,3,4,45,5]; 
console.log(a+b);


const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
console.log(output);




