import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PassengerInfoPage } from './passenger-info.page';

describe('PassengerInfoPage', () => {
  let component: PassengerInfoPage;
  let fixture: ComponentFixture<PassengerInfoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
