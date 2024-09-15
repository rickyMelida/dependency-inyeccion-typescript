// DependencyContainer.ts
import { container } from "tsyringe";
import IBookRepository from "./IBookRepository";
import BookRepository from "./BookRepository";
import BookService from "./BookService";
import IBookService from "./IBookServices";

// Registrar la implementación del repositorio
export const DependencyContainer = () => {
    container.register<IBookRepository>("IBookRepository", {
        useClass: BookRepository,
    });

    container.register<IBookService>("IBookService", {
        useClass: BookService,
    });
};
