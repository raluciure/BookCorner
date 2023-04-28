import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-buy-page',
  templateUrl: './buy-page.component.html',
  styleUrls: ['./buy-page.component.css']
})
export class BuyPageComponent implements OnInit {

  @ViewChild('filter') el:ElementRef;

  constructor(
    private router: Router,
    private route: ActivatedRoute,) { 
    }

  ngOnInit(): void {
  }

  toUnimplemented() {
    this.router.navigate([`/unimplemented`]);
  } 

  filterPress() {
    this.el.nativeElement.style.visibility = "visible";
  }

}
