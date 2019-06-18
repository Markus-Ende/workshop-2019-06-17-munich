// tslint:disable: max-line-length
import { Component, OnInit, OnDestroy } from '@angular/core';
import { BookDataService } from '../book-data.service';
import { Book } from './book';
import { Subscription } from 'rxjs';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, OnDestroy {
  books: Book[];
  subscriptions: Subscription = new Subscription();

  constructor(private bookData: BookDataService) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.bookData
        .getBooks()
        .subscribe(
          (books: Book[]) => (this.books = books),
          error => console.error('ERROR', error),
          () => console.log('completed')
        )
    );

    this.subscriptions.add(
      this.bookData
        .getBooks()
        .subscribe(
          (books: Book[]) => (this.books = books),
          error => console.error('ERROR', error),
          () => console.log('completed')
        )
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
