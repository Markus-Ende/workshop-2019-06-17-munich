import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book-list/book';
import { BookDataService } from '../book-data.service';

@Component({
  selector: 'book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: Book;

  constructor(
    private activatedRoute: ActivatedRoute,
    private booksService: BookDataService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: { isbn: string }) => {
      this.booksService
        .getBookByIsbn(params.isbn)
        .subscribe(book => (this.book = book));
    });
  }
}
