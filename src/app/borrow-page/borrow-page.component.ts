import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-borrow-page',
  templateUrl: './borrow-page.component.html',
  styleUrls: ['./borrow-page.component.css']
})
export class BorrowPageComponent implements OnInit {

  constructor(
    private router: Router) { }

  ngOnInit(): void {
  }

  toUnimplemented() {
    this.router.navigate([`/unimplemented`]);
  } 


}
