import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionReportsComponent } from './question-reports.component';

describe('QuestionReportsComponent', () => {
  let component: QuestionReportsComponent;
  let fixture: ComponentFixture<QuestionReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
