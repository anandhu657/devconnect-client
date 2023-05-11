import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionRightSidebarComponent } from './question-right-sidebar.component';

describe('QuestionRightSidebarComponent', () => {
  let component: QuestionRightSidebarComponent;
  let fixture: ComponentFixture<QuestionRightSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionRightSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionRightSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
