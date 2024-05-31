/* Task - 1
1a) Write a function that displays a message after 5s.


1b) Write a function called delayedGreeting() that takes two parameters, name and delay time, and logs a greeting message after the given delay time.

Input:
delayGreeting(‘Alice’, 2000)

Output:
Hello, Alice! */


// 1
setTimeout(() => {
    // console.log("Hello after 5 seconds!");
    return
}, 5000)

// 2
function delayedGreeting(name, delay_time) {
    setTimeout(() => {
        console.log("Hello ", name);
    }, delay_time);
}

delayedGreeting("Jack", 5000);



function delay(name, time) {
    setTimeout(() => {
        console.log("Hello ", name, "after", time, "seconds");
    }, time)
}

delay("Jack", 2000);

// Task-2  The function tellJoke() below logs a funny message every 2 seconds and after 10 seconds, it stops. Complete the code below and see the output. 


function tellJoke() {
    console.log("Why don't scientists trust atoms? Because they make up everything!");
}

const jokeInterval = setInterval(tellJoke, 2000);

// After 10 seconds, stop telling jokes

setTimeout(() => {

    clearInterval(jokeInterval);

}, 10000);