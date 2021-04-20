const fs = require('fs');

fs.readFile(__filename, function cb1(err, data) {
    fs.writeFile(__filename + '.copy', data, function cb2(err) {
        // nest more callbacks
    });
});

console.log('Test');
