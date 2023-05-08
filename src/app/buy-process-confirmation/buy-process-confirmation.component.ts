import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy-process-confirmation',
  templateUrl: './buy-process-confirmation.component.html',
  styleUrls: ['./buy-process-confirmation.component.css']
})
export class BuyProcessConfirmationComponent implements OnInit {

  steps = [
    { number: 1, title: 'General info' },
    { number: 2, title: 'Personal data' },
    { number: 3, title: 'Payment method' },
    { number: 4, title: 'Confirmation' },
  ];
  stepIndex = 1;

  constructor(public location: Location, public router: Router) { }

  ngOnInit(): void {
  }

  toNext() {
    this.router.navigate([`/buy-success`]);
  }
}
