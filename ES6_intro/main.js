// problem - 1
// __________________________________________

function multiply(pera1, pera2, pera3) {
    return pera1 * pera2 * pera3;
}

console.log(multiply(1,2,3));

let threeline = `I am a web developer.
I love to code. 
I love to eat biryani.`;
console.log(threeline);

let arrowFunction = (pera1, pera2 = 5) => pera1 + pera2;
console.log(arrowFunction(5));



// Problem 2
// _______________________________________________________________

let aryOfFriend = ["jack", "mack", "joe", "pixel", "root"];

let arrayTakingAero = (ary) => {
    let newAry = []
    for(let friend of aryOfFriend){
        if(friend.length >= 4){
            newAry.push(friend);
        }
        
    }
    return newAry;
};

console.log(arrayTakingAero(aryOfFriend));



// Problem 3
// _______________________________________________________________

let arySqure = [2,3,4,5,6];

let squireFunction = (squreAry) => {
    let sum = 0;
    for(let number of squreAry){
        let squreNumber = Math.pow(number, 2);
        sum += squreNumber;
    }
    let avarage = sum / arySqure.length;
    return avarage;
}

console.log(squireFunction(arySqure));


