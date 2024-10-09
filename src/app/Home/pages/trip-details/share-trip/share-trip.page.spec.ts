import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShareTripPage } from './share-trip.page';

describe('ShareTripPage', () => {
  let component: ShareTripPage;
  let fixture: ComponentFixture<ShareTripPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareTripPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
