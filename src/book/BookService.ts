import { inject, injectable } from 'tsyringe';
import IBookRepository from './IBookRepository';
import IBookService from './IBookServices';

@injectable()
export default class BookService implements IBookService {
  bookRepository: IBookRepository;

  constructor(@inject('IBookRepository') bookRepository: IBookRepository) {
    this.bookRepository = bookRepository;
  }

  getBooks() {
    return this.bookRepository.getBooks();
  }
}
