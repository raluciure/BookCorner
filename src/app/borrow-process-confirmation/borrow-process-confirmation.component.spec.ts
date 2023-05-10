import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowProcessConfirmationComponent } from './borrow-process-confirmation.component';

describe('BorrowProcessConfirmationComponent', () => {
  let component: BorrowProcessConfirmationComponent;
  let fixture: ComponentFixture<BorrowProcessConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowProcessConfirmationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrowProcessConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
