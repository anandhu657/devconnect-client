import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionReportDetailsComponent } from './question-report-details.component';

describe('QuestionReportDetailsComponent', () => {
  let component: QuestionReportDetailsComponent;
  let fixture: ComponentFixture<QuestionReportDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionReportDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionReportDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
