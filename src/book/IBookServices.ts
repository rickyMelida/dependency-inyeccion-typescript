import IBook from "./IBook";

export default interface IBookService {
    getBooks(): IBook[]; // Ajusta el tipo de retorno según lo que necesites
}
