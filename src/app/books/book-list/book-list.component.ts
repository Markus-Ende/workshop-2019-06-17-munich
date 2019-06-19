// tslint:disable: max-line-length
import { Component, OnInit, OnDestroy } from '@angular/core';
import { BookDataService } from '../book-data.service';
import { Book } from './book';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  readonly books$: Observable<Book[]>;

  constructor(bookData: BookDataService) {
    this.books$ = bookData.getBooks();
  }
}
