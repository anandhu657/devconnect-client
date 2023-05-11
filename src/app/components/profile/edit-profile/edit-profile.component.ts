import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  user!: any;
  userDetails!: FormGroup;

  constructor(
    private _profileService: ProfileService,
    private _formBuilder: FormBuilder
  ) {
    this.userDetails = this._formBuilder.group({
      "email": ["", [Validators.required, Validators.email]],
      "title": [""],
      "about": [""],
      "githubLink": [""],
      "linkedInLink": [""],
      "personalWebsite": [""],
    })
  }

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this._profileService.editProfile().subscribe((res: any) => {
        if (res && res['status'] === 'ok') {
          this.user = res['data'];
        } else {
          console.log("something went wrong in dashboard");
        }
      })
    }
  }

  get f() {
    return this.userDetails.controls
  }

  editUser() {
    this.userDetails.value.email = this.user.email
    console.log(this.userDetails);

    this._profileService.editProfileDetails(this.userDetails.value).subscribe((res) => {
      // this.router.navigate(['/profile'])
      window.location.reload()
    })
  }
}
