import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanDeactivate,
  CanActivate
} from '@angular/router';
import { Observable } from 'rxjs';
import { BookDetailComponent } from './book-detail/book-detail.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmCandeactivateGuard
  implements CanDeactivate<BookDetailComponent>, CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    console.log('actived');
    return true;
  }

  canDeactivate(
    component: BookDetailComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return confirm(`rly leave "${component.book.title}" book?`);
  }
}
