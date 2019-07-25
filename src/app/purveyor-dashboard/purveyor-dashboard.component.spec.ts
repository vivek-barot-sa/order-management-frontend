import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurveyorDashboardComponent } from './purveyor-dashboard.component';

describe('PurveyorDashboardComponent', () => {
  let component: PurveyorDashboardComponent;
  let fixture: ComponentFixture<PurveyorDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurveyorDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurveyorDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
