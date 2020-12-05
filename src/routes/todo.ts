import express, { Router } from 'express';

const router = express.Router();


router.get('/api/todo', (req, res) =>{
    return res.send('hi todo');
});

router.post('/api/todo', (req, res) =>{
    return res.send('new todo created');
});

export { router as todoRouter};