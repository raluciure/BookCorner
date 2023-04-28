import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyPageWithTitleComponent } from './buy-page-with-title.component';

describe('BuyPageWithTitleComponent', () => {
  let component: BuyPageWithTitleComponent;
  let fixture: ComponentFixture<BuyPageWithTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyPageWithTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyPageWithTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
