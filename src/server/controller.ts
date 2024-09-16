import { Request, Response, NextFunction } from 'express';
import { autoInjectable, inject } from 'tsyringe';
import IBookService from './IBookService';

@autoInjectable()
export default class BookController {
  private _bookService: IBookService;

  constructor(@inject('IBookService') bookService: IBookService) {
    this._bookService = bookService;
  }

  public async getBooks(req: Request, res: Response, next: NextFunction) {
    try {
      const books = await this._bookService.getBooks();
      res.json(books);
    } catch (error) {
      next(error);
    }
  }

  public async getBookById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const book = await this._bookService.getBookById(id);
      if (book) {
        res.json(book);
      } else {
        res.status(404).json({ message: 'Book not found' });
      }
    } catch (error) {
      next(error);
    }
  }

  public async createBook(req: Request, res: Response, next: NextFunction) {
    try {
      const newBook = req.body;
      const createdBook = await this._bookService.createBook(newBook);
      res.status(201).json(createdBook);
    } catch (error) {
      next(error);
    }
  }

  public async updateBook(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const updatedData = req.body;
      const updatedBook = await this._bookService.updateBook(id, updatedData);
      if (updatedBook) {
        res.json(updatedBook);
      } else {
        res.status(404).json({ message: 'Book not found' });
      }
    } catch (error) {
      next(error);
    }
  }

  public async deleteBook(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const result = await this._bookService.deleteBook(id);
      if (result) {
        res.status(204).end();
      } else {
        res.status(404).json({ message: 'Book not found' });
      }
    } catch (error) {
      next(error);
    }
  }
}
