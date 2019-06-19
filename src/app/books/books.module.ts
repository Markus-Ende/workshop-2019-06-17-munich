import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books/books.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDataService } from './book-data.service';
import { HttpClientModule } from '@angular/common/http';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookNewComponent } from './book-new/book-new.component';

@NgModule({
  declarations: [
    BooksComponent,
    BookListComponent,
    BookDetailComponent,
    BookEditComponent,
    BookNewComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [BookDataService],
  exports: [BooksComponent, BookListComponent]
})
export class BooksModule {}
