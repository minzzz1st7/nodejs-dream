import express from 'express';
import { body, validationResult } from 'express-validator';

const app = express();
app.use(express.json());

app.post(
    '/users',
    body('name')
        .notEmpty()
        .withMessage('이름을 입력해')
        .isLength({min: 2, max: 10})
        .withMessage('이름은 두 글자 이상'),
    (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            res.status(400).json({ message: errors.array() });
        }
    console.log(req.body);
    res.sendStatus(201);
});

app.get('/:email', (req, res, next) => {
    res.send('goooooooooood');

})

app.listen(8080);