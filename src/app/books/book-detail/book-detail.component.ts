import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book-list/book';
import { BookDataService } from '../book-data.service';
import { delay, concatMap, tap } from 'rxjs/operators';
import { Subscription, of } from 'rxjs';

@Component({
  selector: 'book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit, OnDestroy {
  book: Book;
  subscription = Subscription.EMPTY;

  constructor(
    private activatedRoute: ActivatedRoute,
    private booksService: BookDataService
  ) {
    console.log('created book details comp.');
  }

  ngOnInit() {
    // this.activatedRoute.params.subscribe((params: { isbn: string }) => {
    //   this.booksService
    //     .getBookByIsbn(params.isbn)
    //     .pipe(delay(2000))
    //     .subscribe(book => (this.book = book));
    // });

    this.subscription = this.activatedRoute.params
      .pipe(
        concatMap((params: { isbn: string }) =>
          this.booksService.getBookByIsbn(params.isbn).pipe(delay(2000))
        ),
        tap(x => console.log('params emitted', x))
      )
      .subscribe(book => (this.book = book));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
