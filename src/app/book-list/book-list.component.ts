import { Component, OnInit, ViewChild } from '@angular/core';
import { Book } from '../interfaces/Book';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  book: Book;
  category: string;
  purpose: string;
  searchText: string;

  @ViewChild('bookForm') bookForm: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,) {
    this.book = { id: "", title: "", category: "" };
    this.searchText = "";
    this.category = "";
    this.purpose = "";
  }

  ngOnInit(): void {
  }

  toUnimplemented() {
    this.router.navigate([`/unimplemented`]);
  } 

  search() {
    if(this.bookForm.value.ntitle == 'Diary of a Wimpy Kid' || this.bookForm.value.npurpose == 'Buy') {
      this.router.navigate([`/buy`]);
    }
    else if (this.bookForm.value.ntitle == '"Picture of Dorian Gray"' || this.bookForm.value.npurpose == 'Borrow') {
      this.router.navigate([`/borrow`]);
    }
  }
}
