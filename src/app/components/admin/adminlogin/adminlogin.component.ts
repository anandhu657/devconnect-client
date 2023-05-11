import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/Auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private readonly _adminLoginService: AuthService,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup(
      {
        'email': new FormControl('', [Validators.required, Validators.email]),
        'password': new FormControl('', [Validators.required, Validators.minLength(8)])
      }
    )
  }

  onLogin() {
    this._adminLoginService.adminLogin(this.loginForm.value).subscribe((adminToken: any) => {
      localStorage.setItem('adminToken', adminToken.token);
      this._router.navigate(['/admin/report/user']);
    })
  }
}
