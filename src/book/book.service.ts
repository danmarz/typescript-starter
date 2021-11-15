import { Injectable } from '@nestjs/common';
import { BookDto } from './book.dto';
import { Book } from './book.class';
const books: Array<Book> = [
  {
    id: 1,
    title: 'El enigma de la habitación 622',
    genre: 'Ficción contemporánea',
    description:
      'Vuelve el «principito de la literatura negra contemporánea, el niño mimado de la industria literaria» (GQ): el nuevo thriller de Joël Dicker es su novela más personal. ',
    author: 'Joël Dicker',
    publisher: 'Alfaguara',
    pages: 624,
    image_url:
      'https://images-na.ssl-images-amazon.com/images/I/41KiZbwOhhL._SX315_BO1,204,203,200_.jpg',
  },
  {
    id: 2,
    title: 'El enigma de la habitación 622',
    genre: 'Ficción contemporánea',
    description:
      'Vuelve el «principito de la literatura negra contemporánea, el niño mimado de la industria literaria» (GQ): el nuevo thriller de Joël Dicker es su novela más personal. ',
    author: 'Joël Dicker',
    publisher: 'Alfaguara',
    pages: 624,
    image_url:
      'https://images-na.ssl-images-amazon.com/images/I/41KiZbwOhhL._SX315_BO1,204,203,200_.jpg',
  },
];
@Injectable()
export class BookService {
  // findAll(params): any {
  //   // return params.length > 0
  //   //   ? `findAll() con ${params}`
  //   //   : 'findAll() funcionando';
  //   let msg = `findAll() funcionando. Parametros:\n`;

  //   if (params.order != undefined) msg += `order: ${params.order} \n`;
  //   if (params.limit != undefined) msg += `limit: ${params.limit} `;

  //   return msg;
  // }
  findAll(): Array<Book> {
    return books;
  }

  findBook(bookId: string): Book {
    return books.find((book) => book.id == +bookId);
  }

  createBook(newBook: BookDto): Book {
    const book = new Book();
    book.id = books.length + 1;
    book.author = newBook.author;
    book.title = newBook.title;
    book.description = newBook.description;
    book.genre = newBook.genre;
    book.pages = +newBook.pages;
    book.publisher = newBook.publisher;
    book.image_url = newBook.image_url;

    books.push(book);
    return book;
    // TODO: implement createBook params
  }

  deleteBook(bookId: string) {
    const book = books.find((book) => book.id == +bookId);
    return books.splice(books.indexOf(book), 1);
  }

  updateBook(bookId, updateBook: BookDto) {
    const book = books.find((book) => book.id == +bookId);
    book.author = updateBook.author;
    book.title = updateBook.title;
    book.description = updateBook.description;
    book.genre = updateBook.genre;
    book.pages = +updateBook.pages;
    book.publisher = updateBook.publisher;
    book.image_url = updateBook.image_url;
    return book;
  }
}
