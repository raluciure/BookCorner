import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy-page-with-title',
  templateUrl: './buy-page-with-title.component.html',
  styleUrls: ['./buy-page-with-title.component.css']
})
export class BuyPageWithTitleComponent implements OnInit {

  @ViewChild('filter') el:ElementRef;
  constructor(
    private router: Router) { }

  ngOnInit(): void {
  }

  toUnimplemented() {
    this.router.navigate([`/unimplemented`]);
  } 

  goToBuy() {
    const inputElement = document.getElementById('purpose') as HTMLInputElement;
    if(inputElement.value == "Buy") {
      this.router.navigate([`/buy`]);
    }
  }

  filterPress() {
    this.el.nativeElement.style.visibility = "visible";
  }

}
