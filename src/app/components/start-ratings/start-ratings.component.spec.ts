import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartRatingsComponent } from './start-ratings.component';

describe('StartRatingsComponent', () => {
  let component: StartRatingsComponent;
  let fixture: ComponentFixture<StartRatingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartRatingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
