// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)



function clock() {
    let time = new Date();
    let time1 = time.toLocaleTimeString('en-US',{
        hour12: false,
    })
    let time2 = time.toLocaleTimeString("en-US", {
      hour12: true,
    });
    
    
    console.log('24 hours format: ',time1);
    console.log("12 hours format: ", time2);
}
setInterval(clock, 1000);
