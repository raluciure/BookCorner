import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy-book-details',
  templateUrl: './buy-book-details.component.html',
  styleUrls: ['./buy-book-details.component.css']
})
export class BuyBookDetailsComponent implements OnInit {

  constructor(public location: Location, public router: Router) { }

  ngOnInit(): void {
  }

  toUnimplemented() {
    this.router.navigate([`/unimplemented`]);
  }

  toGeneralInfo() {
    this.router.navigate([`/buy-general-info`]);
  }

}
