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
function delayedGreeting(name, delay_time){
    setTimeout(() => {
        console.log("Hello ", name);
    }, delay_time);
}

delayedGreeting("Jack", 5000);



function delay(name, time){
    setTimeout(()=>{
        console.log("Hello ", name, "after", time, "seconds");
    },time)
}

delay("Jack",2000);

