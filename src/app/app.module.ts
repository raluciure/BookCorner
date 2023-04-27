import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppHeaderComponent } from './app-header/app-header.component';
import { UnimplementedPageComponent } from './unimplemented-page/unimplemented-page.component';
import { BookListComponent } from './book-list/book-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { BuyPageComponent } from './buy-page/buy-page.component';
import { BorrowPageComponent } from './borrow-page/borrow-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    UnimplementedPageComponent,
    BookListComponent,
    BuyPageComponent,
    BorrowPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
