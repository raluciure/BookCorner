import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy-filters',
  templateUrl: './buy-filters.component.html',
  styleUrls: ['./buy-filters.component.css']
})
export class BuyFiltersComponent implements OnInit {

  constructor(
    private router: Router) {
  }

  ngOnInit(): void {
  }

  closeFilter() {
    // this.router.navigate([`/buy`]);
    location.reload();
  }

  saveFilter() {
    this.router.navigate([`/buy-filter-results`]);
  }
}
