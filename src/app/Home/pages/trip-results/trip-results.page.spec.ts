import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TripResultsPage } from './trip-results.page';

describe('TripResultsPage', () => {
  let component: TripResultsPage;
  let fixture: ComponentFixture<TripResultsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TripResultsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
