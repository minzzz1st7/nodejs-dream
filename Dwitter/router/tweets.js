import express from 'express';
import 'express-async-errors';


const tweets = [
{
    id: '1',
    text: '드림코더분들',
    createdAt: Date.now().toString(),
    name: 'bob',
    username: 'bob',
    url: ''

}];
const router = express.Router();


// GET /tweets
// GET /tweets?username=:username
router.get('/', (req, res, next) => {
    const usernmae = req.query.username;
    const data = username 
    ? tweets.filter((t) => t.username === username)
    : tweets;
    res.status(200).json(data);
});

// GET /tweets/:id
// POST /tweets
// PUT /tweets/:id
// DELETE /tweets/:id


export default router;

