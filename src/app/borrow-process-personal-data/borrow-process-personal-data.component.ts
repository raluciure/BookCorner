import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from '@angular/router';

@Component({
  selector: 'app-borrow-process-personal-data',
  templateUrl: './borrow-process-personal-data.component.html',
  styleUrls: ['./borrow-process-personal-data.component.css']
})
export class BorrowProcessPersonalDataComponent implements OnInit {

  steps = [
    { number: 1, title: 'General info' },
    { number: 2, title: 'Personal data' },
    { number: 3, title: 'Confirmation' },
  ];
  stepIndex = 2;

  constructor(public location: Location, public router: Router) { }

  ngOnInit(): void {
  }

  toNext() {
    this.router.navigate([`/borrow-confirmation`]);
  }

}
