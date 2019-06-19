import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookNewComponent } from './book-new/book-new.component';
import { BooksComponent } from './books/books.component';
import { ConfirmCandeactivateGuard } from './confirm-candeactivate.guard';

const routes: Routes = [
  {
    path: '',
    component: BooksComponent,
    children: [
      {
        path: '',
        component: BookListComponent
      },
      {
        path: 'new',
        component: BookNewComponent
      },
      {
        path: ':isbn',
        component: BookDetailComponent,
        canDeactivate: [ConfirmCandeactivateGuard],
        canActivate: [ConfirmCandeactivateGuard]
      },
      {
        path: ':isbn/edit',
        component: BookEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule {}
