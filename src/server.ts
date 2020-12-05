import express from 'express';
import mongoose, { mongo } from 'mongoose';
import { json } from 'body-parser';
import { todoRouter } from './routes/todo';

const app = express();
app.use(json());
app.use(todoRouter);

mongo.connect

app.listen(3000, () => {
    console.log('server running on port 3000')
})