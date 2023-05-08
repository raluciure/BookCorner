import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyProcessConfirmationComponent } from './buy-process-confirmation.component';

describe('BuyProcessConfirmationComponent', () => {
  let component: BuyProcessConfirmationComponent;
  let fixture: ComponentFixture<BuyProcessConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyProcessConfirmationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyProcessConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
