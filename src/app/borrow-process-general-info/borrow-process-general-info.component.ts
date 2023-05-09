import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from '@angular/router';

@Component({
  selector: 'app-borrow-process-general-info',
  templateUrl: './borrow-process-general-info.component.html',
  styleUrls: ['./borrow-process-general-info.component.css']
})
export class BorrowProcessGeneralInfoComponent implements OnInit {

  steps = [
    { number: 1, title: 'General info' },
    { number: 2, title: 'Personal data' },
    { number: 3, title: 'Confirmation' },
  ];
  stepIndex = 1;

  constructor(public location: Location, public router: Router) { }

  ngOnInit(): void {
  }

  toNext() {
    this.router.navigate([`/borrow-personal-data`]);
  }


}
