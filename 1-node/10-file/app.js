const fs = require('fs');


//3
//rename(...., callback(error, data))
//try {renameSync(...) }  catch(e) {  }
//promises.rename().then().catch(0)



try {
    fs.renameSync('./text.txt', './file-new.txt');

} catch(error) {
    console.error(error);
}

fs.rename('./file-new.txt', './text.txt', (error) => {
    console.log(error);
});
console.log('hello');

fs.promises
    .rename('./text2.txt', './text-new.txt')
    .then(() => console.log('done'))
    .catch(console.error);
