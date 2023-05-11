import { Component, ViewChild, Renderer2, OnInit, OnDestroy, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { faHome, faBlog, faMessage, faBell, faQuestion, faSquarePlus, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-userlayout',
  templateUrl: './userlayout.component.html',
  styleUrls: ['./userlayout.component.css']
})
export class UserlayoutComponent implements OnInit, OnDestroy {
  home = faHome
  blog = faBlog
  message = faMessage
  notification = faBell
  question = faQuestion
  addBlog = faSquarePlus
  profile = faUser

  @Input() userId!: string

  @ViewChild('sidenav') sidenav!: MatSidenav;
  screenWidth!: number;

  constructor(
    private _renderer: Renderer2,
  ) { }

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    this._renderer.listen('window', 'resize', () => {
      this.screenWidth = window.innerWidth;
      if (this.screenWidth < 768) {
        this.sidenav.close();
      } else {
        this.sidenav.open();
      }
    });
  }

  closeSidenav() {
    if (this.screenWidth < 768) {
      this.sidenav.close();
    }
  }

  ngOnDestroy() {
    this._renderer.destroy();
  }
}
