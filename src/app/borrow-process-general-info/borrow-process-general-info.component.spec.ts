import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowProcessGeneralInfoComponent } from './borrow-process-general-info.component';

describe('BorrowProcessGeneralInfoComponent', () => {
  let component: BorrowProcessGeneralInfoComponent;
  let fixture: ComponentFixture<BorrowProcessGeneralInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowProcessGeneralInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrowProcessGeneralInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
