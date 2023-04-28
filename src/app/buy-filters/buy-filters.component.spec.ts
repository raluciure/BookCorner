import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyFiltersComponent } from './buy-filters.component';

describe('BuyFiltersComponent', () => {
  let component: BuyFiltersComponent;
  let fixture: ComponentFixture<BuyFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
