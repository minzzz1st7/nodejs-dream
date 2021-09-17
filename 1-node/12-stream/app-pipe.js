const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('./file.txt');
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream('./file4.zip');

const piping = readStream.pipe(zlibStream).pipe(writeStream);
//스트림끼리 연결해서 데이터가 물처럼 흐를 수 있도록
piping.on('finish', () => {
    console.log('done');
});

const http = require('http');
const server = http.createServer((req,res) => {
    const stream = fs.createReadStream('./file.txt');
    stream.pipe(res);
});

server.listen(3000);