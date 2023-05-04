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
import { BuyPageWithTitleComponent } from './buy-page-with-title/buy-page-with-title.component';
import { BuyFiltersComponent } from './buy-filters/buy-filters.component';
import { BorrowFiltersComponent } from './borrow-filters/borrow-filters.component';
import { BuyFilterResultsComponent } from './buy-filter-results/buy-filter-results.component';
import { BorrowPageWithTitleComponent } from './borrow-page-with-title/borrow-page-with-title.component';
<<<<<<< HEAD
import { GiveBookComponent } from './give-book/give-book.component';
import { DescriptionComponent } from './give-book/description/description.component';
import { VerificationComponent } from './give-book/verification/verification.component';
import { ConfirmationComponent } from './give-book/confirmation/confirmation.component';
=======
import { BorrowFilterResultsComponent } from './borrow-filter-results/borrow-filter-results.component';
>>>>>>> b7ccd124ba91f5d3032626c61d5976d39605ff71

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    UnimplementedPageComponent,
    BookListComponent,
    BuyPageComponent,
    BorrowPageComponent,
    BuyPageWithTitleComponent,
    BuyFiltersComponent,
    BorrowFiltersComponent,
    BuyFilterResultsComponent,
    BorrowPageWithTitleComponent,
<<<<<<< HEAD
    GiveBookComponent,
    DescriptionComponent,
    VerificationComponent,
    ConfirmationComponent
=======
    BorrowFilterResultsComponent
>>>>>>> b7ccd124ba91f5d3032626c61d5976d39605ff71
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
