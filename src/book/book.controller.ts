import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { BookDto } from './book.dto';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  // @Get()
  // findAll(@Query('Order') order: string, @Query('limit') limit: string) {
  //   const params = [];
  //   if (order != undefined) params.push(order);
  //   if (limit != undefined) params.push(limit);

  //   return this.bookService.findAll(params);
  // }

  // @Get()
  // findAll(@Req() request: Request) {
  //   return this.bookService.findAll(request.query);
  // }

  @Get()
  findAll() {
    return this.bookService.findAll();
  }

  @Get(':bookId')
  findBook(@Param('bookId') bookId: string) {
    return this.bookService.findBook(bookId);
  }

  @Post()
  createBook(@Body() newBook: BookDto) {
    // const newBook: any = body;
    return this.bookService.createBook(newBook);
  }

  @Delete(':bookId')
  deleteBook(@Param('bookId') bookId: string) {
    return this.bookService.deleteBook(bookId);
  }

  @Put(':bookId')
  updateBook(@Param('bookId') bookId: string, @Body() newBook: BookDto) {
    // const update: any = body;
    return this.bookService.updateBook(bookId, newBook);
  }
}
