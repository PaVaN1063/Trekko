import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymentInfoPage } from './payment-info.page';

describe('PaymentInfoPage', () => {
  let component: PaymentInfoPage;
  let fixture: ComponentFixture<PaymentInfoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
