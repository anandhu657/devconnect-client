import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReportDetailsComponent } from './user-report-details.component';

describe('UserReportDetailsComponent', () => {
  let component: UserReportDetailsComponent;
  let fixture: ComponentFixture<UserReportDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserReportDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserReportDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
