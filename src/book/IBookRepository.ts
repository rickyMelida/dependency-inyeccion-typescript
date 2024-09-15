import IBook from "./IBook";

// IBookRepository.ts
export default interface IBookRepository {
    getBooks(): IBook[]; // Ajusta el tipo de retorno según lo que necesites
  }
  