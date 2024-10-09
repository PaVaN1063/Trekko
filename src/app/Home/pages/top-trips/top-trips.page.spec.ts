import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopTripsPage } from './top-trips.page';

describe('TopTripsPage', () => {
  let component: TopTripsPage;
  let fixture: ComponentFixture<TopTripsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTripsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
