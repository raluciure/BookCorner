import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { UnimplementedPageComponent } from './unimplemented-page/unimplemented-page.component';
import { BuyPageComponent } from './buy-page/buy-page.component';
import { BorrowPageComponent } from './borrow-page/borrow-page.component';
import { BuyPageWithTitleComponent } from './buy-page-with-title/buy-page-with-title.component';
import { BuyFilterResultsComponent } from './buy-filter-results/buy-filter-results.component';
import { BorrowPageWithTitleComponent } from './borrow-page-with-title/borrow-page-with-title.component';
import {GiveBookComponent} from "./give-book/give-book.component";
import { BorrowFilterResultsComponent } from './borrow-filter-results/borrow-filter-results.component';
import { BorrowBookDetailsComponent } from './borrow-book-details/borrow-book-details.component';
import { BuyBookDetailsComponent } from './buy-book-details/buy-book-details.component';
import { BuyProcessGeneralInfoComponent } from './buy-process-general-info/buy-process-general-info.component';
import { BuyProcessPersonalDataComponent } from './buy-process-personal-data/buy-process-personal-data.component';
import { BuyProcessPaymentComponent } from './buy-process-payment/buy-process-payment.component';
import { BuyProcessConfirmationComponent } from './buy-process-confirmation/buy-process-confirmation.component';
import { BuyProcessSuccessComponent } from './buy-process-success/buy-process-success.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: BookListComponent },
  { path: 'unimplemented', component: UnimplementedPageComponent },
  { path: 'buy', component: BuyPageComponent },
  { path: 'buy-title', component: BuyPageWithTitleComponent },
  { path: 'borrow', component: BorrowPageComponent },
  { path: 'borrow-title', component: BorrowPageWithTitleComponent },
  { path: 'buy-filter-results', component: BuyFilterResultsComponent },
  { path: 'give-book', component: GiveBookComponent },
  { path: 'borrow-filter-results', component: BorrowFilterResultsComponent },
  { path: 'borrow-book-details', component: BorrowBookDetailsComponent },
  { path: 'buy-book-details', component: BuyBookDetailsComponent },
  { path: 'buy-general-info', component: BuyProcessGeneralInfoComponent },
  { path: 'buy-personal-data', component: BuyProcessPersonalDataComponent },
  { path: 'buy-payment', component: BuyProcessPaymentComponent },
  { path: 'buy-confirmation', component: BuyProcessConfirmationComponent },
  { path: 'buy-success', component: BuyProcessSuccessComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router) {
    this.router.errorHandler = (error: any) => {
      this.router.navigate(['']);
    }
  }
 }
