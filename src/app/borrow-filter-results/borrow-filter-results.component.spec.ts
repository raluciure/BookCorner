import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowFilterResultsComponent } from './borrow-filter-results.component';

describe('BorrowFilterResultsComponent', () => {
  let component: BorrowFilterResultsComponent;
  let fixture: ComponentFixture<BorrowFilterResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowFilterResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrowFilterResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
