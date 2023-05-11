import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRightSidebarComponent } from './home-right-sidebar.component';

describe('HomeRightSidebarComponent', () => {
  let component: HomeRightSidebarComponent;
  let fixture: ComponentFixture<HomeRightSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeRightSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeRightSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
