import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksModule } from './books/books.module';
import { AboutModule } from './about/about.module';
import { NavigationComponent } from './navigation/navigation.component';
import { InfoBoxComponent } from './info-box/info-box.component';
import { MouseCursorComponent } from './mouse-cursor/mouse-cursor.component';
import { TitleBoxComponent } from './title-box/title-box.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    InfoBoxComponent,
    MouseCursorComponent,
    TitleBoxComponent,
    PageNotFoundComponent
  ],
  imports: [BrowserModule, AboutModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
