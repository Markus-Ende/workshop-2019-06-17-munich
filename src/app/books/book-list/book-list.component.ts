// tslint:disable: max-line-length
import { Component } from '@angular/core';
import { BookDataService } from '../book-data.service';
import { Book } from './book';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  books: Book[];

  constructor(private bookData: BookDataService) {
    bookData
      .getBooks()
      .subscribe(
        (books: Book[]) => (this.books = books),
        error => console.error('ERROR', error),
        () => console.log('completed')
      );
  }
}
