import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowProcessPersonalDataComponent } from './borrow-process-personal-data.component';

describe('BorrowProcessPersonalDataComponent', () => {
  let component: BorrowProcessPersonalDataComponent;
  let fixture: ComponentFixture<BorrowProcessPersonalDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowProcessPersonalDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrowProcessPersonalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
