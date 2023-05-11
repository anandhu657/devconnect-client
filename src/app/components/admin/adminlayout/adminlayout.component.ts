import { Component, ViewChild, Renderer2, OnInit, OnDestroy } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlayout',
  templateUrl: './adminlayout.component.html',
  styleUrls: ['./adminlayout.component.css']
})
export class AdminlayoutComponent implements OnInit, OnDestroy {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  screenWidth!: number;

  constructor(
    private _renderer: Renderer2,
    private _router: Router
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

  adminLogout() {
    localStorage.removeItem('adminToken');
    this._router.navigate(['/adminlogin']);
  }

  ngOnDestroy() {
    this._renderer.destroy();
  }
}
