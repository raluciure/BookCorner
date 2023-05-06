import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowBookDetailsComponent } from './borrow-book-details.component';

describe('BorrowBookDetailsComponent', () => {
  let component: BorrowBookDetailsComponent;
  let fixture: ComponentFixture<BorrowBookDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowBookDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrowBookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
