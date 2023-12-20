// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second


function counter(n) {
    let i = 0;
    let interval = setInterval(function() {
        console.log(i);
        i++;
        if (i > n) {
            clearInterval(interval);
        }
    }, 1000);
}
console.log(counter(10));