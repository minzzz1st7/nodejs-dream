//fixed-size chuck of memeory
// array of integers, byte of data


const fs = require('fs')
const buf = Buffer.from('hi'); //buffer라는 클래스에 from이라는 api사용
console.log(buf);
console.log(buf.length);
console.log(buf[0]);
console.log(buf[1]);
console.log(buf.toString());


//create
const buf2 = Buffer.alloc(2);
const buf3 = Buffer.allocUnsafe(2);
buf2[0] = 72;
buf2[1] = 105;
buf2.copy(buf3);
console.log(buf2.toString());
console.log(buf3);

//concat : 버퍼를 모을 수 있다.
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf.toString());