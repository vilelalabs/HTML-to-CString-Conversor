/**
 * @description Converts a .html file to a C string variable with line break format
 * @author Henrique Vilela
 * @version 0.1
 */

const fs = require('fs');;

//get arguments on running (the HTML filename with extension)
filename = process.argv[2];

fs.readFile(`./${filename}`, 'utf-8', function (err, data) {
    if (err) throw err;

    //regex for quotes and linebreak replacements
    let findQuotes = /"/g;
    let findLineBreaks = /\r\n/g;

    data = data.replace(findQuotes, '\\"')
    data = data.replace(findLineBreaks, '";\nmsg+= "')

    // start and end of file adjustments
    data = data.replace('<!DOCTYPE html>', 'String msg;\n\nmsg+= "<!DOCTYPE html>')
    data = data.replace('</html>', '</html>";')

    //write out the file to copy and past on the C/C++ file
    fs.writeFile('./out.txt', data, 'utf-8', function (err) {
        if (err) throw err;
    })

})