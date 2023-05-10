import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-borrow-page-with-title',
  templateUrl: './borrow-page-with-title.component.html',
  styleUrls: ['./borrow-page-with-title.component.css']
})
export class BorrowPageWithTitleComponent implements OnInit {

  constructor(
    private router: Router) { }

  ngOnInit(): void {
  }

  toUnimplemented() {
    this.router.navigate([`/unimplemented`]);
  } 

  goToBorrow() {
    const inputElement = document.getElementById('purpose') as HTMLInputElement;
    if(inputElement.value == "Borrow") {
      this.router.navigate([`/borrow`]);
    }
  }

  saveFilter() {
    this.router.navigate([`/borrow-book-details`]);
  }
}
