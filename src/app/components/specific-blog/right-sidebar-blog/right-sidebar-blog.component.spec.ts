import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSidebarBlogComponent } from './right-sidebar-blog.component';

describe('RightSidebarBlogComponent', () => {
  let component: RightSidebarBlogComponent;
  let fixture: ComponentFixture<RightSidebarBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightSidebarBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightSidebarBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
