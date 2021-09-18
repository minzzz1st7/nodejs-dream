import express from 'express';
import fs from 'fs';
import fsAsync from 'fs/promises';

const app = express();

app.use(express.json());

app.get('/file1', (req, res)=>{

    // 동기
    // try {
    //     const data = fs.readFileSync('/file.txt');
    // } catch (error) {
    //     res.status(404).send('file not found');
    // }
    
    // 비동기
    fs.readFile('/file1.txt', (err, data) => {
        if (err) {
            res.setstatus(404).send('file not found');
        }
    });


});

// promise는 비동기
// promise에서 에러 잡을 때는 catch를 사용할 것
app.get('/file2', (req, res) => {
    fsAsync.readFile('/file.txt')
    .catch(error => next(error));
});


// 동기적이나 아래의 안전망에는 포착되지 않는다
app.get('/file3', async (req, res) => {
    const data = await fsAsync.readFile('/file.txt')
});

app.use((err, req, res, next) => {
    console.error(error);
    res.status(500).json({message: 'something went wrong'});
});

app.listen(8080);