import { Component, OnInit } from '@angular/core';
import { Book } from '../book-list/book';

@Component({
  selector: 'book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  book = {
    title: 'My Title',
    abstract: 'My Abstract',
    author: 'My Author'
  } as Book;

  constructor() {}

  ngOnInit() {}

  save(formValue: { title: string; abstract: string; author: string }) {
    console.log('save', formValue);
  }
}
