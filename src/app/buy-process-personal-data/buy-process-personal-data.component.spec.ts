import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyProcessPersonalDataComponent } from './buy-process-personal-data.component';

describe('BuyProcessPersonalDataComponent', () => {
  let component: BuyProcessPersonalDataComponent;
  let fixture: ComponentFixture<BuyProcessPersonalDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyProcessPersonalDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyProcessPersonalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
