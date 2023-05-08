import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyProcessSuccessComponent } from './buy-process-success.component';

describe('BuyProcessSuccessComponent', () => {
  let component: BuyProcessSuccessComponent;
  let fixture: ComponentFixture<BuyProcessSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyProcessSuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyProcessSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
