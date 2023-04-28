import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowFiltersComponent } from './borrow-filters.component';

describe('BorrowFiltersComponent', () => {
  let component: BorrowFiltersComponent;
  let fixture: ComponentFixture<BorrowFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrowFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
