import { Injectable } from '@nestjs/common';

@Injectable()
export class BookService {
    findAll(): any {
        return 'findAll funcionando: This action returns all books';
    }

    createBook(): any {
        // TODO: implement createBook params
        return 'createBook funcionando: This action creates a book';
    }

    deleteBook(): any {
        return 'deleteBook funcionando: This action deletes a book';
    }

    updateBook(): any {
        return 'updateBook funcionando: This action updates a book';
    }

}

