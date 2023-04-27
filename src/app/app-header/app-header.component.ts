import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  
  closeMenu() {
    const menuResponsive = document.querySelector('.menu-responsive');
    menuResponsive?.classList.remove('active');
  }

  openMenu() {
    const menuResponsive = document.querySelector('.menu-responsive');
    menuResponsive?.classList.add('active');
  }

  toUnimplemented() {
    this.router.navigate([`/unimplemented`]);
  } 

  toWelcomePage() {
    this.router.navigate([`/welcome`]);
  } 
}
