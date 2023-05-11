import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogReportDetailsComponent } from './blog-report-details.component';

describe('BlogReportDetailsComponent', () => {
  let component: BlogReportDetailsComponent;
  let fixture: ComponentFixture<BlogReportDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogReportDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogReportDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
