import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { UnimplementedPageComponent } from './unimplemented-page/unimplemented-page.component';
import { BuyPageComponent } from './buy-page/buy-page.component';
import { BorrowPageComponent } from './borrow-page/borrow-page.component';
import { BuyPageWithTitleComponent } from './buy-page-with-title/buy-page-with-title.component';
import { BuyFilterResultsComponent } from './buy-filter-results/buy-filter-results.component';
import { BorrowPageWithTitleComponent } from './borrow-page-with-title/borrow-page-with-title.component';
<<<<<<< HEAD
import {GiveBookComponent} from "./give-book/give-book.component";
=======
import { BorrowFilterResultsComponent } from './borrow-filter-results/borrow-filter-results.component';
>>>>>>> b7ccd124ba91f5d3032626c61d5976d39605ff71

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: BookListComponent },
  { path: 'unimplemented', component: UnimplementedPageComponent },
  { path: 'buy', component: BuyPageComponent },
  { path: 'buy-title', component: BuyPageWithTitleComponent },
  { path: 'borrow', component: BorrowPageComponent },
  { path: 'borrow-title', component: BorrowPageWithTitleComponent },
  { path: 'buy-filter-results', component: BuyFilterResultsComponent },
<<<<<<< HEAD
  { path: 'give-book', component: GiveBookComponent }
=======
  { path: 'borrow-filter-results', component: BorrowFilterResultsComponent },
  
>>>>>>> b7ccd124ba91f5d3032626c61d5976d39605ff71
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
