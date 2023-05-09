import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from '@angular/router';

@Component({
  selector: 'app-borrow-process-confirmation',
  templateUrl: './borrow-process-confirmation.component.html',
  styleUrls: ['./borrow-process-confirmation.component.css']
})
export class BorrowProcessConfirmationComponent implements OnInit {

  steps = [
    { number: 1, title: 'General info' },
    { number: 2, title: 'Personal data' },
    { number: 3, title: 'Confirmation' },
  ];
  stepIndex = 3;

  constructor(public location: Location, public router: Router) { }

  ngOnInit(): void {
  }

  toNext() {
    this.router.navigate([`/borrow-success`]);
  }

}
