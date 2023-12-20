// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

let fs = require('fs');
function readFile() {
    fs.readFile("./4-write-to-file.md", "UTF-8", (error,data) => {
        if (error) {
            console.error("Following error Occured while reading file: ", error);
            return;
        }
        console.log("Read the content here: ", data);
        console.log(op(1000));
    } );
    
}
function op(n) {
    let sum = 0;
    for (let i = 0; i < n; i++){
        sum += i;
    }
    return sum;
}
readFile();