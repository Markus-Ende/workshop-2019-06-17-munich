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
    this.books = bookData.getBooks();
  }
}
