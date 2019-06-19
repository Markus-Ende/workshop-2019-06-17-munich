import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book-list/book';

@Injectable()
export class BookDataService {
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:4730/books');
  }

  getBookByIsbn(isbn: string): Observable<Book> {
    return this.http.get<Book>(`http://localhost:4730/books/${isbn}`);
  }

  updateBook(book: Book) {
    return this.http.put<Book>(
      `http://localhost:4730/books/${book.isbn}`,
      book
    );
  }

  createBook(book: Book) {
    return this.http.post<Book>(`http://localhost:4730/books`, book);
  }

  constructor(private http: HttpClient) {}
}
