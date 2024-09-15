import IBook from "./IBook";
import IBookRepository from "./IBookRepository";

export default class BookRepository implements IBookRepository{
  books: IBook[] = [
    { id: 1, name: 'The Pragmatic Programmer' },
    { id: 2, name: 'Poems that Solve Puzzles' },
  ];

  getBooks() {
    return this.books;
  }
}
