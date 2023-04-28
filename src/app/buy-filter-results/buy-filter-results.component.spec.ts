import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyFilterResultsComponent } from './buy-filter-results.component';

describe('BuyFilterResultsComponent', () => {
  let component: BuyFilterResultsComponent;
  let fixture: ComponentFixture<BuyFilterResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyFilterResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyFilterResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
