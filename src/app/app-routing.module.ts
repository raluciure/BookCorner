import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { UnimplementedPageComponent } from './unimplemented-page/unimplemented-page.component';
import { BuyPageComponent } from './buy-page/buy-page.component';
import { BorrowPageComponent } from './borrow-page/borrow-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: BookListComponent },
  { path: 'unimplemented', component: UnimplementedPageComponent },
  { path: 'buy', component: BuyPageComponent },
  { path: 'borrow', component: BorrowPageComponent },
  
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
