import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-buy-filter-results',
  templateUrl: './buy-filter-results.component.html',
  styleUrls: ['./buy-filter-results.component.css']
})
export class BuyFilterResultsComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,) { 
    }

  ngOnInit(): void {
  }

  toUnimplemented() {
    this.router.navigate([`/unimplemented`]);
  } 

  toBuyBook() {
    this.router.navigate([`/buy-book-details`]);
  } 

}
