// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

let fs = require('fs');

function fileCleaner() {
    let cleanedData;
    fs.readFile('./new.txt', 'UTF-8', (err,data) => {
        if (err) {
            console.error('Error encountered in reading of file: ', err);
            return;
        }
        cleanedData = data.replace(/\s+/g,' ');
        
        fs.writeFile("./new.txt", cleanedData, (error) => {
          if (err) {
            console.error("Error encountered in writing of file: ", error);
            return;
            }
            console.log('File changed successfully!');
        });
    })
    
}
fileCleaner();