import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyBookDetailsComponent } from './buy-book-details.component';

describe('BuyBookDetailsComponent', () => {
  let component: BuyBookDetailsComponent;
  let fixture: ComponentFixture<BuyBookDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyBookDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyBookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
