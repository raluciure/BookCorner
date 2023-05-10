import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowProcessSuccessComponent } from './borrow-process-success.component';

describe('BorrowProcessSuccessComponent', () => {
  let component: BorrowProcessSuccessComponent;
  let fixture: ComponentFixture<BorrowProcessSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowProcessSuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrowProcessSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
