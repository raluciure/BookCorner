import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy-process-general-info',
  templateUrl: './buy-process-general-info.component.html',
  styleUrls: ['./buy-process-general-info.component.css']
})
export class BuyProcessGeneralInfoComponent implements OnInit {

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
    this.router.navigate([`/buy-personal-data`]);
  }

}
