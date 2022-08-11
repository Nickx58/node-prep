const fs = require("fs")

/*
Sync function to write data to the file
It take file name and text as a argument
*/

// fs.writeFileSync("notes.txt", "Hello My Name is Nikhil Sharma");

/*
Synchronously append data to a file, creating the file if it does not yet exist
*/

fs.appendFileSync('notes.txt', "\nI live in Amritsar Punjab")