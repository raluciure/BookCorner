import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-borrow-filter-results',
  templateUrl: './borrow-filter-results.component.html',
  styleUrls: ['./borrow-filter-results.component.css']
})
export class BorrowFilterResultsComponent implements OnInit {

  constructor(
    private router: Router) { }

  ngOnInit(): void {
  }

  toUnimplemented() {
    this.router.navigate([`/unimplemented`]);
  }

}
