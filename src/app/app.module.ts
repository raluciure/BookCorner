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
import { GiveBookComponent } from './give-book/give-book.component';
import { DescriptionComponent } from './give-book/description/description.component';
import { VerificationComponent } from './give-book/verification/verification.component';
import { ConfirmationComponent } from './give-book/confirmation/confirmation.component';
import { BorrowFilterResultsComponent } from './borrow-filter-results/borrow-filter-results.component';
import { BuyBookDetailsComponent } from './buy-book-details/buy-book-details.component';
import { BorrowBookDetailsComponent } from './borrow-book-details/borrow-book-details.component';
import { BuyProcessGeneralInfoComponent } from './buy-process-general-info/buy-process-general-info.component';
import { BuyProcessPersonalDataComponent } from './buy-process-personal-data/buy-process-personal-data.component';
import { BuyProcessPaymentComponent } from './buy-process-payment/buy-process-payment.component';
import { BuyProcessConfirmationComponent } from './buy-process-confirmation/buy-process-confirmation.component';
import { BuyProcessSuccessComponent } from './buy-process-success/buy-process-success.component';
import { BorrowProcessGeneralInfoComponent } from './borrow-process-general-info/borrow-process-general-info.component';
import { BorrowProcessPersonalDataComponent } from './borrow-process-personal-data/borrow-process-personal-data.component';
import { BorrowProcessConfirmationComponent } from './borrow-process-confirmation/borrow-process-confirmation.component';
import { BorrowProcessSuccessComponent } from './borrow-process-success/borrow-process-success.component';

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
    GiveBookComponent,
    DescriptionComponent,
    VerificationComponent,
    ConfirmationComponent,
    BorrowFilterResultsComponent,
    BuyBookDetailsComponent,
    BorrowBookDetailsComponent,
    BuyProcessGeneralInfoComponent,
    BuyProcessPersonalDataComponent,
    BuyProcessPaymentComponent,
    BuyProcessConfirmationComponent,
    BuyProcessSuccessComponent,
    BorrowProcessGeneralInfoComponent,
    BorrowProcessPersonalDataComponent,
    BorrowProcessConfirmationComponent,
    BorrowProcessSuccessComponent
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
