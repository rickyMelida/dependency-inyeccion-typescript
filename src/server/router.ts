import { Router } from 'express';
import { autoInjectable, inject } from 'tsyringe';
import BookController from './controller';

@autoInjectable()
export default class BookRouter {
  private _router: Router;
  private _controller: BookController;

  constructor(@inject(BookController) controller: BookController) {
    this._router = Router();
    this._controller = controller;
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this._router.get('/', this._controller.getBooks.bind(this._controller));
    this._router.get('/:id', this._controller.getBookById.bind(this._controller));
    this._router.post('/', this._controller.createBook.bind(this._controller));
    this._router.put('/:id', this._controller.updateBook.bind(this._controller));
    this._router.delete('/:id', this._controller.deleteBook.bind(this._controller));
  }

  public getRouter(): Router {
    return this._router;
  }
}
