import express, { Request, Response, NextFunction } from 'express';
import { container } from 'tsyringe';
import BookRouter from './router';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // Para parsear JSON en las peticiones

const bookRouter = container.resolve(BookRouter);
app.use('/books', bookRouter.getRouter());

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
