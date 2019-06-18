import { Injectable } from '@angular/core';
import { Book } from './book-list/book';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BookDataService {
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:4730/books');
  }

  getBookByIsbn(isbn: string): Observable<Book> {
    return this.http.get<Book>(`http://localhost:4730/books/${isbn}`);
  }

  constructor(private http: HttpClient) {}
}
