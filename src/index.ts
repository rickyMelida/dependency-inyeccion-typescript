import 'reflect-metadata';
import express from 'express';
import { container } from 'tsyringe';
import BookController from './book/BookController';
import { DependencyContainer } from './book/DependencyContainer';
const port = process.env.port || 5000;

DependencyContainer()
const app = express();

app.use('/books', container.resolve(BookController).routes());
app.listen(port, () => console.log(`listening on port: ${port}`));
