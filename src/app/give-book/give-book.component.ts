import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'app-give-book',
  templateUrl: './give-book.component.html',
  styleUrls: ['./give-book.component.css']
})
export class GiveBookComponent implements OnInit {
  steps = [
    { number: 1, title: 'Description' },
    { number: 2, title: 'Verification' },
    { number: 3, title: 'Confirmation' }
  ];
  stepIndex = 1;
  constructor(
    public location: Location
  ) { }

  ngOnInit(): void {
  }

}
