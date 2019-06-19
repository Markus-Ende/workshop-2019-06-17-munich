import { Component, OnInit } from '@angular/core';
import { Book } from '../book-list/book';

@Component({
  selector: 'book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  book = {
    title: 'My Title'
  } as Book;

  constructor() {}

  ngOnInit() {}
}
