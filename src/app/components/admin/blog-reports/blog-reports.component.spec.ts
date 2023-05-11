import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogReportsComponent } from './blog-reports.component';

describe('BlogReportsComponent', () => {
  let component: BlogReportsComponent;
  let fixture: ComponentFixture<BlogReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
