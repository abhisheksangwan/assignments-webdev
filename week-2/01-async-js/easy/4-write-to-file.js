// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

let fs = require('fs');
function writeInFile() {
    let data = `hi this is a default message typed for writing in a new file.
    got it ? okay then ...
    BYE RAHEGAA...`;
    fs.writeFile("./new.txt", data, (err) => {
        if (err) {
            console.error("Error occured in writing in a new file: ", err);
            return;
        }
    })
}
writeInFile();
