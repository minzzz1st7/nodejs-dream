const fs = require('fs');

const data = [];
fs.createReadStream('./file.txt', {
    //highWaterMark: 8,
    // encoding: 'utf - 8',
}).on('data', (chunk) => {
    data.push(chunk);
    console.count('data');
}).on('end', () => {
    console.log(data.join(''));
}).on('error', error => {
    //error가 발생하면 error 객체가 전달된다.
    console.log(error);
});