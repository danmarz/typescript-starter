import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { BookService } from './book.service';

@Controller('book')
export class BookController {

    constructor(private readonly bookService:BookService) { }

    @Get()
    findAll(): any {
        return this.bookService.findAll();
    }

    @Post()
    createBook(): any {
        return this.bookService.createBook();
    }

    @Delete()
    deleteBook(): any {
        return this.bookService.deleteBook();
    }

    @Put()
    updateBook(): any {
        return this.bookService.updateBook();
    }
}
