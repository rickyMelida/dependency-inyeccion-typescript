import { Router } from 'express';
import { autoInjectable, inject } from 'tsyringe';
import BookService from './BookService';
import IBookService from './IBookServices';

@autoInjectable()
export default class BookController {
  _bookService: IBookService;
  router: Router;

  constructor(@inject('IBookService') bookService: IBookService) {
    this._bookService = bookService;
    this.router = new Router();
  }

  getBooksRoute() {
    return this._bookService.getBooks();
  }

  routes() {
    this.router.get('/', (_req, res) => res.send(this.getBooksRoute()));
    return this.router;
  }
}
