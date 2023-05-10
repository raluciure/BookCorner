import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from '@angular/router';

@Component({
  selector: 'app-borrow-book-details',
  templateUrl: './borrow-book-details.component.html',
  styleUrls: ['./borrow-book-details.component.css']
})
export class BorrowBookDetailsComponent implements OnInit {

  constructor(public location: Location, public router: Router) { }

  ngOnInit(): void {
  }

  toUnimplemented() {
    this.router.navigate([`/unimplemented`]);
  }

  toGeneralInfo() {
    this.router.navigate([`/borrow-general-info`]);
  }

}
