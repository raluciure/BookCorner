import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyProcessPaymentComponent } from './buy-process-payment.component';

describe('BuyProcessPaymentComponent', () => {
  let component: BuyProcessPaymentComponent;
  let fixture: ComponentFixture<BuyProcessPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyProcessPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyProcessPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
