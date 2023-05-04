import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-borrow-filters',
  templateUrl: './borrow-filters.component.html',
  styleUrls: ['./borrow-filters.component.css']
})
export class BorrowFiltersComponent implements OnInit {

  constructor(
    private router: Router) {
  }

  ngOnInit(): void {
  }

  closeFilter() {
    location.reload();
  }

  saveFilter() {
    this.router.navigate([`/borrow-filter-results`]);
  }

}
