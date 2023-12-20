// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.



function counter(n,i=0){

    console.log(i);
    
    if (i < n) {
        setTimeout(() => {
            counter(n,i+1)
        },1000);
    }
    
}
counter(10);




































































// (Hint: setTimeout)