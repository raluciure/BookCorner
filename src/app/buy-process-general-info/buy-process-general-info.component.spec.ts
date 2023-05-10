import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyProcessGeneralInfoComponent } from './buy-process-general-info.component';

describe('BuyProcessGeneralInfoComponent', () => {
  let component: BuyProcessGeneralInfoComponent;
  let fixture: ComponentFixture<BuyProcessGeneralInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyProcessGeneralInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyProcessGeneralInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
