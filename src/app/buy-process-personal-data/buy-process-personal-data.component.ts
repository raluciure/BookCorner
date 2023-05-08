import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy-process-personal-data',
  templateUrl: './buy-process-personal-data.component.html',
  styleUrls: ['./buy-process-personal-data.component.css']
})
export class BuyProcessPersonalDataComponent implements OnInit {

  steps = [
    { number: 1, title: 'General info' },
    { number: 2, title: 'Personal data' },
    { number: 3, title: 'Payment method' },
    { number: 4, title: 'Confirmation' },
  ];
  stepIndex = 2;

  constructor(public location: Location, public router: Router) { }

  ngOnInit(): void {
  }

  toNext() {
    this.router.navigate([`/buy-payment`]);
  }

}
