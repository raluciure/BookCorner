import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from '@angular/router';

@Component({
  selector: 'app-borrow-process-success',
  templateUrl: './borrow-process-success.component.html',
  styleUrls: ['./borrow-process-success.component.css']
})
export class BorrowProcessSuccessComponent implements OnInit {

  steps = [
    { number: 1, title: 'General info' },
    { number: 2, title: 'Personal data' },
    { number: 3, title: 'Confirmation' },
  ];
  stepIndex = 2;

  constructor(public location: Location, public router: Router) { }

  ngOnInit(): void {
  }

  toMain() {
    this.router.navigate([`/welcome`]);
  }

  toUnimplemented() {
    this.router.navigate([`/unimplemented`]);
  }

}
