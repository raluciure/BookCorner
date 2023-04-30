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

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: BookListComponent },
  { path: 'unimplemented', component: UnimplementedPageComponent },
  { path: 'buy', component: BuyPageComponent },
  { path: 'buy-title', component: BuyPageWithTitleComponent },
  { path: 'borrow', component: BorrowPageComponent },
  { path: 'borrow-title', component: BorrowPageWithTitleComponent },
  { path: 'buy-filter-results', component: BuyFilterResultsComponent },
  { path: 'give-book', component: GiveBookComponent }
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
