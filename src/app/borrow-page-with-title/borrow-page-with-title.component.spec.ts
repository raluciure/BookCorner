import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowPageWithTitleComponent } from './borrow-page-with-title.component';

describe('BorrowPageWithTitleComponent', () => {
  let component: BorrowPageWithTitleComponent;
  let fixture: ComponentFixture<BorrowPageWithTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowPageWithTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrowPageWithTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
