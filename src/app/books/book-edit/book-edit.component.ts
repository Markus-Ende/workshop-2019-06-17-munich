import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  Inject
} from '@angular/core';
import { Book } from '../book-list/book';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { concatMap } from 'rxjs/operators';
import { BookDataService } from '../book-data.service';
import { DOCUMENT, Location } from '@angular/common';

@Component({
  selector: 'book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit, OnDestroy {
  book: Book;
  subscriptions = new Subscription();

  constructor(
    private booksService: BookDataService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const subscription = this.activatedRoute.params
      .pipe(
        concatMap((params: { isbn: string }) =>
          this.booksService.getBookByIsbn(params.isbn)
        )
      )
      .subscribe(book => (this.book = book));
    this.subscriptions.add(subscription);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  save(formValue: { title: string; abstract: string; author: string }) {
    const book = this.book;
    this.subscriptions.add(
      this.booksService
        .updateBook(book)
        .subscribe(() => this.router.navigateByUrl('books'))
    );
  }
}
