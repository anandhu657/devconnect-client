import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private _http: HttpClient) { }
  ngOnInit(): void {
    this._http.get('http://localhost:3000/admin/report/user').subscribe((res) => {
      console.log(res);
    }
    )
  }
}
